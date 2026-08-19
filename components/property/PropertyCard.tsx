"use client";
import { IProperty } from "@/types/property";
import Image from "next/image";
import { Badge } from "../ui/badge";
import {
  Bath,
  Bed,
  BedDouble,
  Heart,
  MapPin,
  Maximize2,
  Ruler,
} from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useState } from "react";

interface PropertyCardProps {
  property: IProperty;
}
const PLACEHOLDER_IMAGE =
  "/images/property-placeholder.jpg";
const PropertyCard = ({ property }: PropertyCardProps) => {
const [currentImage, setCurrentImage] = useState(0);

  const images =
    property.images?.filter(
      (image) =>
        image.imageUrl &&
        image.imageUrl.trim().length > 0,
    ) ?? [];

  const hasImages = images.length > 0;

  const totalImages = hasImages ? images.length : 1;

  const imageUrl = hasImages
    ? images[currentImage]?.imageUrl ??
      images[0].imageUrl
    : PLACEHOLDER_IMAGE;

  const showPreviousImage = () => {
    if (images.length <= 1) return;

    setCurrentImage((current) =>
      current === 0
        ? images.length - 1
        : current - 1,
    );
  };

  const showNextImage = () => {
    if (images.length <= 1) return;

    setCurrentImage((current) =>
      current === images.length - 1
        ? 0
        : current + 1,
    );
  };

  const rentPrice = Number(property.rentPrice);
  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
        <Image
          src={imageUrl}
          alt={property.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 384px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Location Badge */}
        <div className="absolute left-3 top-3">
          <span className="rounded-md bg-background/90 px-2.5 py-1 text-xs font-semibold shadow-sm backdrop-blur-sm">
            {property.city}, {property.division}
          </span>
        </div>

        {/* Category Badge */}
        {property.category?.name && (
          <div className="absolute right-3 top-3">
            <span className="rounded-md bg-background/90 px-2.5 py-1 text-xs font-medium shadow-sm backdrop-blur-sm">
              {property.category.name}
            </span>
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="p-5">
        <h3 className="line-clamp-1 text-lg font-semibold tracking-tight">
          {property.title}
        </h3>

        {/* Location */}
        <div className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="size-4 shrink-0 text-primary" />

          <span className="truncate">
            {property.address}, {property.city}
          </span>
        </div>

        {/* Property Features */}
        <div className="mt-4 flex items-center justify-between border-y py-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Bed className="size-4 text-primary" />
            <span>
              {property.bedrooms} Beds
            </span>
          </div>

          <div className="h-4 w-px bg-border" />

          <div className="flex items-center gap-1.5">
            <Bath className="size-4 text-primary" />
            <span>
              {property.bathrooms} Baths
            </span>
          </div>

          <div className="h-4 w-px bg-border" />

          <div className="flex items-center gap-1.5">
            <Maximize2 className="size-4 text-primary" />
            <span>
              {property.area
                ? `${property.area} sqft`
                : "N/A"}
            </span>
          </div>
        </div>

        {/* Price & Action */}
        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="text-xl font-bold text-primary sm:text-2xl">
              ৳
              {Number.isFinite(rentPrice)
                ? rentPrice.toLocaleString("en-BD")
                : "N/A"}

              <span className="ml-1 text-xs font-normal text-muted-foreground">
                /Month
              </span>
            </div>
          </div>

          <Link
            href={`/properties/${property.id}`}
            className="shrink-0"
          >
            <Button
              variant="outline"
              size="sm"
              className="rounded-xl px-4 font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              View Detail
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
