import { Bath, Bed, BedDouble, Building2, Calendar, Car, CircleDollarSign, MapPinned, Maximize, Ruler } from 'lucide-react';
import React from 'react'
interface PropertyOverviewProps {
  bedrooms: number;
  bathrooms: number;
  area: number;
  category: string;
  city: string;
  rentPrice: string;
}

const PropertyOverview = ({ bedrooms, bathrooms, area, category, city, rentPrice }: PropertyOverviewProps) => {
     const overviewItems = [
    {
      icon: BedDouble,
      label: "Bedrooms",
      value: bedrooms,
    },
    {
      icon: Bath,
      label: "Bathrooms",
      value: bathrooms,
    },
    {
      icon: Ruler,
      label: "Area",
      value: `${area} sqft`,
    },
    {
      icon: Building2,
      label: "Category",
      value: category,
    },
    {
      icon: MapPinned,
      label: "City",
      value: city,
    },
    {
      icon: CircleDollarSign,
      label: "Monthly Rent",
      value: `৳ ${Number(rentPrice).toLocaleString()}`,
    },
  ];
  return (
    <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold tracking-tight">Overview</h2>
                <span className="text-xs text-muted-foreground font-mono">Property ID: H-224</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 p-6 rounded-xl border border-border/60 bg-card">
                <div className="flex flex-col items-center text-center space-y-1">
                  <Bed className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm font-bold">2</span>
                  <span className="text-xs text-muted-foreground">Bedrooms</span>
                </div>
                <div className="flex flex-col items-center text-center space-y-1">
                  <Bath className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm font-bold">2</span>
                  <span className="text-xs text-muted-foreground">Bathrooms</span>
                </div>
                <div className="flex flex-col items-center text-center space-y-1">
                  <Car className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm font-bold">2</span>
                  <span className="text-xs text-muted-foreground">Garage</span>
                </div>
                <div className="flex flex-col items-center text-center space-y-1">
                  <Calendar className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm font-bold">2022</span>
                  <span className="text-xs text-muted-foreground">Year Built</span>
                </div>
                <div className="flex flex-col items-center text-center space-y-1 col-span-2 sm:col-span-1">
                  <Maximize className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm font-bold">1,354</span>
                  <span className="text-xs text-muted-foreground">Area Size</span>
                </div>
              </div>
            </div>
  )
}

export default PropertyOverview