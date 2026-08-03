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

interface PropertyCardProps {
  property: IProperty;
}
const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    // <div className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
    //   {/* Image */}
    //   <div className="relative aspect-[16/10] overflow-hidden">
    //     <Image
    //       src={
    //         property.images.length > 0
    //           ? property.images[0]
    //           : "/images/property-placeholder.jpg"
    //       }
    //       alt={property.title}
    //       fill
    //       className="object-cover transition-transform duration-700 group-hover:scale-110"
    //     />

    //     {/* Gradient */}
    //     <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

    //     {/* Badges */}
    //     <div className="absolute left-4 top-4 flex gap-2">
    //       <Badge>{property.category.name}</Badge>

    //       <Badge
    //         variant={
    //           property.availability === "AVAILABLE" ? "default" : "secondary"
    //         }
    //       >
    //         {property.availability}
    //       </Badge>
    //     </div>

    //     {/* Wishlist */}
    //     <button className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow backdrop-blur transition hover:scale-110">
    //       <Heart className="size-5" />
    //     </button>
    //   </div>

    //   {/* Content */}
    //   <div className="flex flex-1 flex-col p-6">
    //     <h3 className="line-clamp-1 text-xl font-semibold transition-colors group-hover:text-primary">
    //       {property.title}
    //     </h3>

    //     <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
    //       <MapPin className="size-4" />
    //       <span className="line-clamp-1">
    //         {property.address}, {property.city}
    //       </span>
    //     </div>

    //     {/* Price */}
    //     <div className="mt-5">
    //       <span className="text-3xl font-bold text-primary">
    //         ৳ {Number(property.rentPrice).toLocaleString()}
    //       </span>

    //       <span className="ml-1 text-muted-foreground">/month</span>
    //     </div>

    //     {/* Amenities */}
    //     <div className="mt-6 grid grid-cols-3 gap-3 rounded-xl bg-muted/40 p-3">
    //       <div className="flex flex-col items-center gap-1">
    //         <BedDouble className="size-5 text-primary" />
    //         <span className="text-xs text-muted-foreground">Bedrooms</span>
    //         <span className="font-semibold">{property.bedrooms}</span>
    //       </div>

    //       <div className="flex flex-col items-center gap-1">
    //         <Bath className="size-5 text-primary" />
    //         <span className="text-xs text-muted-foreground">Bathrooms</span>
    //         <span className="font-semibold">{property.bathrooms}</span>
    //       </div>

    //       <div className="flex flex-col items-center gap-1">
    //         <Ruler className="size-5 text-primary" />
    //         <span className="text-xs text-muted-foreground">Area</span>
    //         <span className="font-semibold">{property.area} sqft</span>
    //       </div>
    //     </div>

    //     {/* Button */}
    //     <Button variant="default" size="lg" className="mt-6 w-full rounded-xl">
    //       <Link href={`/properties/${property.id}`}>View Details →</Link>
    //     </Button>
    //   </div>
    // </div>
    <div className="group w-full max-w-sm overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-lg">
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
        <img
          src={
            property.images.length > 0
              ? property.images[0]
              : "/images/property-placeholder.jpg"
          }
          alt={property.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3">
          <span className="rounded-md bg-background/90 px-2.5 py-1 text-xs font-semibold shadow-sm backdrop-blur-sm">
            {property.address}, {property.city}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5">
        <h3 className="text-lg font-semibold tracking-tight">
          {property.title}
        </h3>

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
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="h-4 w-[1px] bg-border" />
          <div className="flex items-center gap-1.5">
            <Bath className="size-4 text-primary" />
            <span>{property.bathrooms} Baths</span>
          </div>
          <div className="h-4 w-[1px] bg-border" />
          <div className="flex items-center gap-1.5">
            <Maximize2 className="size-4 text-primary" />
            <span>{property.area} sqft</span>
          </div>
        </div>

        {/* Price & Action */}
        <div className="mt-4 flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-primary">
              ${property.rentPrice}
              <span className="text-xs font-normal text-muted-foreground">
                /Month
              </span>
            </div>
          </div>

          <Link href={`/properties/${property.id}`}>
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
