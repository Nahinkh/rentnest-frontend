"use client"
import { ImageIcon, ImagePlus, UploadCloud, X } from 'lucide-react';
import React, { ChangeEvent, DragEvent, useEffect, useRef, useState } from 'react'
import { Button } from '../ui/button';

interface PropertyImageUploadProps {
  value: File[];
  onChange: (files: File[]) => void;
  maxFiles?: number;
  maxSizeInMB?: number;
}
const PropertyImageUpload = ({ value, onChange, maxFiles = 5, maxSizeInMB = 5 }: PropertyImageUploadProps) => {
     const inputRef = useRef<HTMLInputElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [previews, setPreviews] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  /**
   * Generate previews whenever files change
   */
  useEffect(() => {
    const urls = value.map((file) =>
      URL.createObjectURL(file)
    );

    setPreviews(urls);

    return () => {
      urls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [value]);

  /**
   * Validate files
   */
  const validateFiles = (files: File[]) => {
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
    ];

    const maxSize = maxSizeInMB * 1024 * 1024;

    for (const file of files) {
      if (!allowedTypes.includes(file.type)) {
        return `${file.name} is not a supported image format.`;
      }

      if (file.size > maxSize) {
        return `${file.name} is larger than ${maxSizeInMB}MB.`;
      }
    }

    return null;
  };

  /**
   * Add files
   */
  const addFiles = (newFiles: File[]) => {
    setError(null);

    if (!newFiles.length) return;

    const validationError = validateFiles(newFiles);

    if (validationError) {
      setError(validationError);
      return;
    }

    const availableSlots = maxFiles - value.length;

    if (availableSlots <= 0) {
      setError(
        `You can upload a maximum of ${maxFiles} images.`
      );
      return;
    }

    const filesToAdd = newFiles.slice(0, availableSlots);

    /**
     * Prevent duplicate files
     */
    const uniqueFiles = filesToAdd.filter(
      (newFile) =>
        !value.some(
          (existingFile) =>
            existingFile.name === newFile.name &&
            existingFile.size === newFile.size &&
            existingFile.lastModified ===
              newFile.lastModified
        )
    );

    if (!uniqueFiles.length) {
      setError("These images have already been added.");
      return;
    }

    onChange([...value, ...uniqueFiles]);
  };

  /**
   * File input
   */
  const handleFileChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const files = Array.from(event.target.files ?? []);

    addFiles(files);

    /**
     * Allow selecting the same file again
     */
    event.target.value = "";
  };

  /**
   * Drag enter
   */
  const handleDragEnter = (
    event: DragEvent<HTMLDivElement>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    setIsDragging(true);
  };

  /**
   * Drag leave
   */
  const handleDragLeave = (
    event: DragEvent<HTMLDivElement>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    setIsDragging(false);
  };

  /**
   * Drag over
   */
  const handleDragOver = (
    event: DragEvent<HTMLDivElement>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    if (!isDragging) {
      setIsDragging(true);
    }
  };

  /**
   * Drop
   */
  const handleDrop = (
    event: DragEvent<HTMLDivElement>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    setIsDragging(false);

    const files = Array.from(
      event.dataTransfer.files
    ).filter((file) =>
      file.type.startsWith("image/")
    );

    addFiles(files);
  };

  /**
   * Remove image
   */
  const removeImage = (index: number) => {
    const updatedFiles = value.filter(
      (_, fileIndex) => fileIndex !== index
    );

    onChange(updatedFiles);
    setError(null);
  };
  return (
     <div className="space-y-4">
      {/* ============================================================
          HEADER
      ============================================================ */}
      <div className="flex items-end justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold">
            Property Images
          </h3>

          <p className="mt-0.5 text-xs text-muted-foreground">
            Add high-quality images of your property.
          </p>
        </div>

        <span className="shrink-0 text-[10px] text-muted-foreground">
          {value.length}/{maxFiles}
        </span>
      </div>

      {/* ============================================================
          UPLOAD AREA
      ============================================================ */}
      {value.length < maxFiles && (
        <div
          role="button"
          tabIndex={0}
          onClick={() => inputRef.current?.click()}
          onKeyDown={(event) => {
            if (
              event.key === "Enter" ||
              event.key === " "
            ) {
              inputRef.current?.click();
            }
          }}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className={`
            relative flex min-h-[190px] cursor-pointer flex-col
            items-center justify-center rounded-xl border-2
            border-dashed px-6 py-8 text-center transition-all
            ${
              isDragging
                ? "border-primary bg-primary/5"
                : "border-border/70 bg-muted/10 hover:border-primary/40 hover:bg-muted/20"
            }
          `}
        >
          <input
            ref={inputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            multiple
            className="hidden"
            onChange={handleFileChange}
          />

          <div
            className={`
              mb-4 flex h-11 w-11 items-center justify-center
              rounded-full border bg-background transition-colors
              ${
                isDragging
                  ? "border-primary/40 text-primary"
                  : "border-border text-muted-foreground"
              }
            `}
          >
            {isDragging ? (
              <UploadCloud className="h-5 w-5" />
            ) : (
              <ImagePlus className="h-5 w-5" />
            )}
          </div>

          <p className="text-sm font-medium">
            {isDragging
              ? "Drop your images here"
              : "Upload property images"}
          </p>

          <p className="mt-1 text-xs text-muted-foreground">
            Drag & drop images here or click to browse
          </p>

          <p className="mt-3 text-[10px] text-muted-foreground">
            JPG, PNG or WEBP • Maximum {maxSizeInMB}MB each
          </p>
        </div>
      )}

      {/* ============================================================
          ERROR
      ============================================================ */}
      {error && (
        <div className="rounded-lg border border-destructive/30 bg-destructive/5 px-3 py-2.5">
          <p className="text-xs text-destructive">
            {error}
          </p>
        </div>
      )}

      {/* ============================================================
          IMAGE PREVIEWS
      ============================================================ */}
      {value.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium">
              Selected Images
            </p>

            <p className="text-[10px] text-muted-foreground">
              First image will be the cover
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {previews.map((preview, index) => (
              <div
                key={`${value[index]?.name}-${index}`}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg border bg-muted"
              >
                <img
                  src={preview}
                  alt={`Property preview ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                {/* Cover badge */}
                {index === 0 && (
                  <span className="absolute left-2 top-2 rounded-md bg-background/90 px-2 py-1 text-[9px] font-medium shadow-sm backdrop-blur">
                    Cover Image
                  </span>
                )}

                {/* Remove */}
                <Button
                  type="button"
                  variant="secondary"
                  size="icon"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeImage(index);
                  }}
                  className="absolute right-2 top-2 h-7 w-7 rounded-full bg-background/90 opacity-100 shadow-sm backdrop-blur transition-opacity hover:bg-destructive hover:text-destructive-foreground sm:opacity-0 sm:group-hover:opacity-100"
                  aria-label={`Remove image ${index + 1}`}
                >
                  <X className="h-3.5 w-3.5" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ============================================================
          EMPTY STATE HINT
      ============================================================ */}
      {value.length === 0 && (
        <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
          <ImageIcon className="h-3.5 w-3.5" />
          <span>
            Adding multiple images helps tenants understand
            your property better.
          </span>
        </div>
      )}
    </div>
  )
}

export default PropertyImageUpload