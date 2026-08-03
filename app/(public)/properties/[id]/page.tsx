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

  if (isPending)
    return <div className="container mx-auto py-20">Loading...</div>;

  if (isError)
    return <div className="container mx-auto py-20">Something went wrong.</div>;

  if (!property)
    return <div className="container mx-auto py-20">Property not found.</div>;
  return (
    // <section className="py-16">
    //   <div className="container mx-auto px-4">
    //     <div className="grid gap-10 lg:grid-cols-2">
    //       {/* Image */}

    //       <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border">
    //         <Image
    //           src={
    //             property.images.length > 0
    //               ? property.images[0]
    //               : "/images/property-placeholder.jpg"
    //           }
    //           alt={property.title}
    //           fill
    //           className="object-cover"
    //         />
    //       </div>

    //       {/* Content */}

    //       <div>
    //         <div className="mb-4 flex flex-wrap gap-2">
    //           <Badge>{property.category.name}</Badge>

    //           <Badge
    //             variant={
    //               property.availability === "AVAILABLE"
    //                 ? "default"
    //                 : "secondary"
    //             }
    //           >
    //             {property.availability}
    //           </Badge>
    //         </div>

    //         <h1 className="text-4xl font-bold">{property.title}</h1>

    //         <div className="text-muted-foreground mt-4 flex items-center gap-2">
    //           <MapPin className="size-5" />
    //           {property.address}, {property.city}, {property.division}
    //         </div>

    //         <p className="mt-6 text-muted-foreground leading-8">
    //           {property.description}
    //         </p>

    //         <div className="mt-8 grid grid-cols-2 gap-5">
    //           <div className="flex items-center gap-3 rounded-xl border p-4">
    //             <BedDouble className="text-primary" />
    //             <div>
    //               <p className="text-sm text-muted-foreground">Bedrooms</p>
    //               <h4 className="font-semibold">{property.bedrooms}</h4>
    //             </div>
    //           </div>

    //           <div className="flex items-center gap-3 rounded-xl border p-4">
    //             <Bath className="text-primary" />
    //             <div>
    //               <p className="text-sm text-muted-foreground">Bathrooms</p>
    //               <h4 className="font-semibold">{property.bathrooms}</h4>
    //             </div>
    //           </div>

    //           <div className="flex items-center gap-3 rounded-xl border p-4">
    //             <Ruler className="text-primary" />
    //             <div>
    //               <p className="text-sm text-muted-foreground">Area</p>
    //               <h4 className="font-semibold">{property.area} sqft</h4>
    //             </div>
    //           </div>

    //           <div className="flex items-center gap-3 rounded-xl border p-4">
    //             <Building2 className="text-primary" />
    //             <div>
    //               <p className="text-sm text-muted-foreground">Category</p>
    //               <h4 className="font-semibold">{property.category.name}</h4>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="mt-8 rounded-2xl border bg-muted/30 p-6">
    //           <div className="mb-5 flex items-center gap-3">
    //             <User className="text-primary" />

    //             <div>
    //               <p className="font-semibold">{property.landlord.name}</p>

    //               <p className="text-sm text-muted-foreground">
    //                 {property.landlord.email}
    //               </p>
    //             </div>
    //           </div>

    //           <div className="flex items-center justify-between">
    //             <div>
    //               <p className="text-muted-foreground">Monthly Rent</p>

    //               <h2 className="text-primary text-4xl font-bold">
    //                 ৳ {Number(property.rentPrice).toLocaleString()}
    //               </h2>
    //             </div>

    //             <Button size="lg">Request Rental</Button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    // <div className="container mx-auto py-16">
    //   <PropertyHeader
    //     title={property.title}
    //     address={property.address}
    //     city={property.city}
    //     division={property.division}
    //     category={property.category.name}
    //     availability={property.availability}
    //   />
    //   <PropertyGallery title={property.title} images={property.images} />
    //   <div className="mt-16 grid gap-10 lg:grid-cols-3">
    //     <div className="lg:col-span-2 space-y-10">
    //       <PropertyOverview
    //       bedrooms={property.bedrooms}
    //       bathrooms={property.bathrooms}
    //       area={property.area}
    //       category={property.category.name}
    //       city={property.city}
    //       rentPrice={property.rentPrice}
    //     />
    //     </div>
    //     <div className="lg:col-span-1 space-y-10">
    //       <PropertyBookingCard
    //       propertyId={property.id}
    //       rentPrice={property.rentPrice}
    //       availability={property.availability}
    //       landlord={property.landlord}
    //     />
    //     </div>
    //   </div>
    // </div>
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
        <PropertyGallery title={property.title} images={property.images} />

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
