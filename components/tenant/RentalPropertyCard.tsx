import React from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { MapPin } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { IRentalRequest } from "@/types/tenant/rentalRequest";

interface RentalPropertyCardProps {
  request: IRentalRequest;
}

const RentalPropertyCard = ({ request }: RentalPropertyCardProps) => {
  const property = request.property;

  const image =
    property.images?.[0]?.imageUrl ?? "/images/property-placeholder.jpg";

  const statusConfig = {
    PENDING:
      "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-500",

    APPROVED:
      "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",

    REJECTED: "border-destructive/30 bg-destructive/10 text-destructive",

    CANCELLED: "border-border bg-secondary text-muted-foreground",
  };
  return (
    <Card className="group overflow-hidden border-border/60 bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={image}
          alt={property.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <Badge
          variant="outline"
          className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] ${statusConfig[request.status]}`}
        >
          {request.status}
        </Badge>
      </div>

      {/* Content */}
      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="line-clamp-1 text-sm font-semibold">
            {property.title}
          </h3>

          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="size-3.5 shrink-0 text-primary" />

            <span className="truncate">
              {property.city}, {property.division}
            </span>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between border-t pt-3">
          <div>
            <p className="text-lg font-bold text-primary">
              ৳{Number(property.rentPrice).toLocaleString("en-BD")}
            </p>

            <p className="text-[10px] text-muted-foreground">per month</p>
          </div>

          <Button
            variant="outline"
            size="sm"
            className="h-8 rounded-lg px-3 text-xs"
          >
            <Link href={`/properties/${property.id}`}>View Details</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RentalPropertyCard;
