import React from "react";
import PropertyOverview from "./PropertyOverview";
import InformationGrid from "./InformationGrid";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import PropertyDescription from "./PropertyDescription";
import { Button } from "@/components/ui/button";

const PropertyInformation = ({ property }: { property: any }) => {
  return (
    <div className="lg:col-span-2 space-y-10">
      <PropertyOverview
                  area={property.area}
                  bathrooms={property.bathrooms}
                  bedrooms={property.bedrooms}
                  category={property.category.name}
                  city={property.city}
                  rentPrice={property.rentPrice}
                  key={property.id}
                />
      {/* Information Grid Matrix */}
      <InformationGrid />
      {/* Amenities Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">
          Amenities & Features
        </h2>
        <div className="flex flex-wrap gap-3">
          {[
            "HVAC",
            "Hardwood",
            "Laundry",
            "Balcony",
            "Dryer",
            "High Speed Internet",
            "Security System",
          ].map((amenity, i) => (
            <Badge
              key={i}
              variant="outline"
              className="px-3 py-1.5 text-xs font-normal gap-1.5 bg-card"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
              {amenity}
            </Badge>
          ))}
        </div>
      </div>

      {/* Description Paragraph */}
      <PropertyDescription />

      {/* Map Location Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold tracking-tight">Map Location</h2>
          <Button variant="outline" size="sm">
            Open Map
          </Button>
        </div>
        <div className="w-full h-72 rounded-xl border border-border/60 bg-secondary/30 relative flex items-center justify-center overflow-hidden">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
            Interactive Map Integration Placeholder
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyInformation;
