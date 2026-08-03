"use client";
import PropertyCard from "@/components/property/PropertyCard";
import PropertyGrid from "@/components/property/PropertyGrid";
import PropertyHero from "@/components/property/PropertyHero";
import PropertySidebar from "@/components/property/PropertySidebar";
import PropertyToolbar from "@/components/property/PropertyToolbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useProperties } from "@/hook/property/useProperties";
import {
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  List,
  RotateCcw,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const PropertyPage = () => {
  const { data: properties, isPending, isError } = useProperties();
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [isSticky, setIsSticky] = useState(false);
  const toolbarRef = useRef<HTMLDivElement | null>(null);
  const totalPages = 5;

  useEffect(() => {
    const handleScroll = () => {
      if (toolbarRef.current) {
        const rect = toolbarRef.current.getBoundingClientRect();
        // Change '64' if your Navbar height is different (e.g., h-16 = 64px)
        setIsSticky(rect.top <= 64);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  return (
    <>
      {/* <PropertyHero />

      <SidebarProvider>
        <PropertySidebar />
        <SidebarInset>

          <div className="container mx-auto px-6 py-8">

            <div className="mb-6 flex items-center">
              <SidebarTrigger />
            </div>

            <PropertyToolbar />

            <PropertyGrid />

          </div>

        </SidebarInset>
      </SidebarProvider> */}
      <div className="container mx-auto px-4 py-8">
      {/* Header & Controls Section */}
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Property Listing</h1>

        <div className="flex flex-wrap items-center gap-3">
          {/* Sort Dropdown */}
          <select className="h-10 rounded-lg border bg-background px-3 text-sm font-medium outline-none focus:ring-2 focus:ring-primary">
            <option>Most popular</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>

          {/* View Mode Toggles */}
          <div className="flex items-center rounded-lg border bg-background p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`rounded-md p-1.5 transition-colors ${
                viewMode === "grid"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <LayoutGrid className="size-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`rounded-md p-1.5 transition-colors ${
                viewMode === "list"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <List className="size-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Toolbar Section with Sticky Effect */}
      <div ref={toolbarRef} className="my-6">
        <div
          className={`transition-all duration-200 ${
            isSticky
              ? "fixed left-0 right-0 top-16 z-40 rounded-none border-x-0 border-t-0 bg-card/95 px-4 py-3 shadow-md backdrop-blur-md md:px-8"
              : "rounded-2xl border bg-card p-4 shadow-sm"
          }`}
        >
          <div className="container mx-auto grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr_1fr_auto_auto_auto]">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input className="h-10 pl-9 text-sm" placeholder="What are you looking for" />
            </div>

            {/* Status Select */}
            <select className="h-10 rounded-md border bg-background px-3 text-sm text-muted-foreground outline-none focus:ring-2 focus:ring-primary">
              <option value="">Status</option>
              <option value="rent">For Rent</option>
              <option value="sale">For Sale</option>
            </select>

            {/* Type Select */}
            <select className="h-10 rounded-md border bg-background px-3 text-sm text-muted-foreground outline-none focus:ring-2 focus:ring-primary">
              <option value="">Type</option>
              <option value="apartment">Apartment</option>
              <option value="house">Family Home</option>
              <option value="commercial">Commercial</option>
            </select>

            {/* Beds Select */}
            <select className="h-10 rounded-md border bg-background px-3 text-sm text-muted-foreground outline-none focus:ring-2 focus:ring-primary">
              <option value="">Beds</option>
              <option value="1">1+ Beds</option>
              <option value="2">2+ Beds</option>
              <option value="3">3+ Beds</option>
              <option value="4">4+ Beds</option>
            </select>

            {/* Baths Select */}
            <select className="h-10 rounded-md border bg-background px-3 text-sm text-muted-foreground outline-none focus:ring-2 focus:ring-primary">
              <option value="">Baths</option>
              <option value="1">1+ Baths</option>
              <option value="2">2+ Baths</option>
            </select>

            {/* Reset Filter Button */}
            <Button variant="outline" size="icon" className="h-10 w-10 shrink-0">
              <RotateCcw className="size-4 text-muted-foreground" />
            </Button>

            {/* Advanced Filter Button */}
            <Button variant="outline" size="icon" className="h-10 w-10 shrink-0">
              <SlidersHorizontal className="size-4 text-muted-foreground" />
            </Button>

            {/* Search Button */}
            <Button className="h-10 px-6 font-medium">Search</Button>
          </div>
        </div>
      </div>

      {/* Property Grid */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {properties?.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-12 flex items-center justify-center gap-2">
        {/* Previous Page Button */}
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-xl"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="size-4" />
        </Button>

        {/* Page Number Buttons */}
        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          const isActive = currentPage === pageNumber;

          return (
            <Button
              key={pageNumber}
              variant={isActive ? "default" : "outline"}
              className={`h-10 w-10 rounded-xl font-medium ${
                isActive ? "shadow-md" : "hover:bg-accent"
              }`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </Button>
          );
        })}

        {/* Next Page Button */}
        <Button
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-xl"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ChevronRight className="size-4" />
        </Button>
      </div>
    </div>
    </>
  );
};
export default PropertyPage;
