"use client"
import { Card, CardContent } from '@/components/ui/card'
import { IProperty } from '@/types/property'
import { ArrowUpRight, Bath, Bed, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
interface FeaturedPropertyCardProps {
  property: IProperty;
  featured?: boolean;
}

const PLACEHOLDER_IMAGE = "/images/property-placeholder.jpg";
const FeaturedPropertyCard = ({ property, featured }: FeaturedPropertyCardProps ) => {
    const imageUrl =
    property.images?.find(
      (image) => image.imageUrl && image.imageUrl.trim().length > 0,
    )?.imageUrl ?? PLACEHOLDER_IMAGE;

  const rentPrice = Number(property.rentPrice);
  return (
     <Card
      className={`group overflow-hidden rounded-2xl border-border/60 bg-card py-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        featured ? "h-full" : ""
      }`}
    >
      {/* Image */}
      <Link
        href={`/properties/${property.id}`}
        className="relative block overflow-hidden"
      >
        <div
          className={`relative w-full overflow-hidden bg-muted ${
            featured ? "aspect-[16/9]" : "aspect-[4/3]"
          }`}
        >
          <Image
            src={imageUrl}
            alt={property.title}
            fill
            sizes={
              featured
                ? "(max-width: 1024px) 100vw, 50vw"
                : "(max-width: 640px) 100vw, 25vw"
            }
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Featured Label */}
          <div className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground shadow-sm backdrop-blur-sm">
            Featured
          </div>

          {/* Open Button */}
          <div className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-background/90 text-foreground opacity-0 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
            <ArrowUpRight className="size-4" />
          </div>
        </div>
      </Link>

      {/* Content */}
      <CardContent className="p-4 sm:p-5">
        {/* Location */}
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="size-4 shrink-0 text-primary" />

          <span className="truncate">
            {property.city}, {property.division}
          </span>
        </div>

        {/* Title */}
        <Link href={`/properties/${property.id}`}>
          <h3
            className={`mt-2 line-clamp-1 font-semibold tracking-tight transition-colors group-hover:text-primary ${
              featured ? "text-xl" : "text-lg"
            }`}
          >
            {property.title}
          </h3>
        </Link>

        {/* Property Info */}
        <div className="mt-4 flex items-center gap-5 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Bed className="size-4 text-primary" />
            <span>{property.bedrooms} Beds</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Bath className="size-4 text-primary" />
            <span>{property.bathrooms} Baths</span>
          </div>
        </div>

        {/* Price */}
        <div className="mt-4 border-t pt-4">
          <p className="text-lg font-bold text-primary">
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
  )
}

export default FeaturedPropertyCard