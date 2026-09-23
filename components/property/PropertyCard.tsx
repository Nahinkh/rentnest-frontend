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
import { Card, CardContent } from "../ui/card";

interface PropertyCardProps {
  property: IProperty;
}
const PLACEHOLDER_IMAGE = "/images/property-placeholder.jpg";
const PropertyCard = ({ property }: PropertyCardProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  const images =
    property.images?.filter(
      (image) => image.imageUrl && image.imageUrl.trim().length > 0,
    ) ?? [];

  const hasImages = images.length > 0;

  const totalImages = hasImages ? images.length : 1;

  const imageUrl = hasImages
    ? (images[currentImage]?.imageUrl ?? images[0].imageUrl)
    : PLACEHOLDER_IMAGE;

  const showPreviousImage = () => {
    if (images.length <= 1) return;

    setCurrentImage((current) =>
      current === 0 ? images.length - 1 : current - 1,
    );
  };

  const showNextImage = () => {
    if (images.length <= 1) return;

    setCurrentImage((current) =>
      current === images.length - 1 ? 0 : current + 1,
    );
  };

  const rentPrice = Number(property.rentPrice);
  return (
    <Card className="group w-full overflow-hidden rounded-2xl border-border/60 bg-card py-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <Link href={`/properties/${property.id}`} className="block">
        <div className="relative aspect-[1.4/1] w-full overflow-hidden bg-muted">
          <Image
            src={imageUrl}
            alt={property.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 384px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      <CardContent className="p-4 text-center">
        {/* Location */}
        <div className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="size-4 shrink-0 text-primary" />

          <span className="truncate">
            {property.city}, {property.division}
          </span>
        </div>

        {/* Title */}
        <Link href={`/properties/${property.id}`}>
          <h3 className="mt-2 line-clamp-1 text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
            {property.title}
          </h3>
        </Link>

        {/* Bed / Bath */}
        <div className="mt-4 flex items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Bed className="size-4 text-primary" />
            <span>{property.bedrooms} Beds</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Bath className="size-4 text-primary" />
            <span>{property.bathrooms} Baths</span>
          </div>
        </div>

        {/* Full-width Price */}
        <div className="mt-4 w-full border-t pt-4">
          <p className="text-xl font-bold text-primary">
            ৳
            {Number.isFinite(rentPrice)
              ? rentPrice.toLocaleString("en-BD")
              : "N/A"}
            <span className="ml-1 text-xs font-normal text-muted-foreground">
              / month
            </span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
