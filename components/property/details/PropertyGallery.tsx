"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Grid2X2, ImageIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface PropertyImage {
  id?: string;
  imageUrl: string;
  publicId?: string;
}
interface PropertyGalleryProps {
  images?: PropertyImage[];
  title: string;
}

const PLACEHOLDER_IMAGE = "/images/property-placeholder.jpg";

const PropertyGallery = ({ images = [], title }: PropertyGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  /**
   * Keep selected image valid when the property/images change.
   */
  useEffect(() => {
    setSelectedImage(0);
  }, [images]);

  /**
   * Use actual property images when available.
   * Otherwise fall back to the existing placeholder design.
   */
  const gallery =
    images.length > 0
      ? images
      : [
          {
            imageUrl: PLACEHOLDER_IMAGE,
          },
          {
            imageUrl: PLACEHOLDER_IMAGE,
          },
          {
            imageUrl: PLACEHOLDER_IMAGE,
          },
        ];

  const currentImage = gallery[selectedImage] ?? gallery[0];

  const hasRealImages = images.length > 0;

  const goToPrevious = () => {
    setSelectedImage((current) =>
      current === 0 ? gallery.length - 1 : current - 1,
    );
  };

  const goToNext = () => {
    setSelectedImage((current) =>
      current === gallery.length - 1 ? 0 : current + 1,
    );
  };
  return (
    <div className="grid h-[420px] grid-cols-1 gap-4 md:grid-cols-3">
      {/* ============================================================
          MAIN IMAGE
      ============================================================ */}
      <div className="group relative flex items-center justify-center overflow-hidden rounded-xl border border-border/50 bg-secondary/40 md:col-span-2">
        <Image
          src={currentImage.imageUrl}
          alt={`${title} - Image ${selectedImage + 1}`}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 66vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />

        {/* Subtle overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

        {/* Previous */}
        {hasRealImages && gallery.length > 1 && (
          <Button
            type="button"
            variant="secondary"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-3 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-background/85 opacity-0 shadow-sm backdrop-blur transition-opacity group-hover:opacity-100"
            aria-label="Previous property image"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        )}

        {/* Next */}
        {hasRealImages && gallery.length > 1 && (
          <Button
            type="button"
            variant="secondary"
            size="icon"
            onClick={goToNext}
            className="absolute right-3 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-background/85 opacity-0 shadow-sm backdrop-blur transition-opacity group-hover:opacity-100"
            aria-label="Next property image"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}

        {/* Image counter */}
        {hasRealImages && (
          <div className="absolute bottom-3 left-3 rounded-md bg-background/85 px-2.5 py-1 text-[10px] font-medium text-foreground shadow-sm backdrop-blur">
            {selectedImage + 1} / {gallery.length}
          </div>
        )}

        {/* Existing design label */}
        {!hasRealImages && (
          <span className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Primary Exterior View
          </span>
        )}
      </div>

      {/* ============================================================
          SIDE IMAGE STACK
      ============================================================ */}
      <div className="grid h-full grid-rows-2 gap-4">
        {/* Second image */}
        <button
          type="button"
          onClick={() => {
            if (gallery.length > 1) {
              setSelectedImage(1);
            }
          }}
          disabled={gallery.length <= 1}
          className="group relative overflow-hidden rounded-xl border border-border/50 bg-secondary/40 text-left"
        >
          <Image
            src={gallery[1]?.imageUrl ?? PLACEHOLDER_IMAGE}
            alt={`${title} - Image 2`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {!hasRealImages && (
            <span className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Interior Living Room
            </span>
          )}
        </button>

        {/* Third / additional images */}
        <button
          type="button"
          onClick={() => {
            if (gallery.length > 2) {
              setSelectedImage(2);
            }
          }}
          disabled={gallery.length <= 2}
          className="group relative overflow-hidden rounded-xl border border-border/50 bg-secondary/40 text-left"
        >
          <Image
            src={gallery[2]?.imageUrl ?? PLACEHOLDER_IMAGE}
            alt={`${title} - Image 3`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {hasRealImages && gallery.length > 3 ? (
            <span className="absolute bottom-3 right-3 rounded-md bg-background/85 px-2.5 py-1 text-[10px] font-medium backdrop-blur">
              +{gallery.length - 3} Photos
            </span>
          ) : !hasRealImages ? (
            <span className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Additional Photos
            </span>
          ) : null}
        </button>
      </div>
    </div>
  );
};

export default PropertyGallery;
