import { IProperty } from "@/types/property";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Bath, BedDouble, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

interface PropertyCardProps {
  property: IProperty;
}
const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <div className="group overflow-hidden rounded-2xl border bg-card transition-all hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={
            property.images.length > 0
              ? property.images[0]
              : "/images/property-placeholder.jpg"
          }
          alt={property.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <Badge
          variant={
            property.availability === "AVAILABLE" ? "default" : "secondary"
          }
        >
          {property.availability}
        </Badge>
        <Badge variant="outline">{property.category.name}</Badge>
      </div>

      <div className="space-y-4 p-5">
        <div>
          <h3 className="line-clamp-1 text-xl font-semibold">
            {property.title}
          </h3>

          <div className="mt-2 flex items-center gap-2 text-muted-foreground">
            <MapPin className="size-4" />
            {property.address}, {property.city}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-5 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <BedDouble className="size-4" />
              {property.bedrooms}
            </div>

            <div className="flex items-center gap-1">
              <Bath className="size-4" />
              {property.bathrooms}
            </div>
            <p className="text-sm text-muted-foreground">
              By {property.landlord.name}
            </p>
          </div>

          <span className="text-primary text-2xl font-bold">
            ৳ {Number(property.rentPrice).toLocaleString()}/month
          </span>
        </div>

        <Button className="w-full">
          <Link href={`/properties/${property.id}`}>View Details</Link>
        </Button>
      </div>
    </div>
  );
};

export default PropertyCard;
