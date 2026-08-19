"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useProperty } from "@/hook/property/useProperty";
import {
  Bath,
  Bed,
  BedDouble,
  Building2,
  Calendar,
  Car,
  CheckCircle2,
  MapPin,
  Maximize,
  MessageSquare,
  Phone,
  Ruler,
  Star,
  User,
} from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import PropertyHeader from "@/components/property/details/PropertyHeader";
import PropertyGallery from "@/components/property/details/PropertyGallery";
import PropertyOverview from "@/components/property/details/PropertyOverview";
import PropertyBookingCard from "@/components/property/details/PropertyBookingCard";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import PropertyInformation from "@/components/property/details/PropertyInformation";

const page = () => {
  const params = useParams();

  const {
    data: property,
    isPending,
    isError,
  } = useProperty(params.id as string);
  console.log("property", property);

  if (isPending)
    return <div className="container mx-auto py-20">Loading...</div>;

  if (isError)
    return <div className="container mx-auto py-20">Something went wrong.</div>;

  if (!property)
    return <div className="container mx-auto py-20">Property not found.</div>;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Top Navigation */}

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 py-10 space-y-8 flex-1 w-full">
        {/* Title & Header Section */}
        <PropertyHeader
          title={property.title}
          address={property.address}
          city={property.city}
          division={property.division}
          category={property.category.name}
          availability={property.availability}
          rentPrice={property.rentPrice}
          area={property.area}
        />

        {/* Photo Gallery Grid */}
        <PropertyGallery images={property.images} title={property.title} />

        {/* Two-Column Content & Sticky Sidebar Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start pt-4">
          <PropertyInformation property={property} />
          <PropertyBookingCard
            propertyId={property.id}
            rentPrice={property.rentPrice}
            availability={property.availability}
            landlord={property.landlord}
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 mt-16 text-center text-xs text-muted-foreground">
        <p>
          © 2026 Vesta Inc. All rights reserved. Professional Minimalist Real
          Estate Architecture.
        </p>
      </footer>
    </div>
  );
};

export default page;
