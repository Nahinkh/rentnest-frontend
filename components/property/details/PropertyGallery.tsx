"use client";

import { Button } from "@/components/ui/button";
import { Grid2X2, ImageIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

interface PropertyGalleryProps {
  images: string[];
  title: string;
}

const PropertyGallery = ({ images, title }: PropertyGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const gallery =
    images.length > 0
      ? images
      : [
          "/images/property-placeholder.jpg",
          "/images/property-placeholder.jpg",
          "/images/property-placeholder.jpg",
          "/images/property-placeholder.jpg",
          "/images/property-placeholder.jpg",
        ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[420px]">
          {/* Main Large Image */}
          <div className="md:col-span-2 bg-secondary/40 rounded-xl overflow-hidden relative border border-border/50 flex items-center justify-center">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Primary Exterior View</span>
          </div>
          {/* Side Thumbnail Stack */}
          <div className="grid grid-rows-2 gap-4 h-full">
            <div className="bg-secondary/40 rounded-xl overflow-hidden relative border border-border/50 flex items-center justify-center">
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Interior Living Room</span>
            </div>
            <div className="bg-secondary/40 rounded-xl overflow-hidden relative border border-border/50 flex items-center justify-center">
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">+1 Additional Photos</span>
            </div>
          </div>
        </div>
  );
};

export default PropertyGallery;
