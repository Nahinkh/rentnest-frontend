import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { locations } from "./browse-location.data";
import LocationCard from "./LocationCard";

const BrowseByLocation = () => {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-primary">Explore</p>

            <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
              Browse by Location
            </h2>

            <p className="mt-2 max-w-xl text-sm text-muted-foreground sm:text-base">
              Find rental properties in the places you want to live.
            </p>
          </div>

          <Link
            href="/properties"
            className="hidden items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80 sm:flex"
          >
            View All
            <ArrowRight className="size-4" />
          </Link>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-2">
          {locations.map((location) => (
            <LocationCard key={location.slug} location={location} />
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-5 flex sm:hidden">
          <Link
            href="/properties"
            className="flex items-center gap-1.5 text-sm font-medium text-primary"
          >
            View All
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrowseByLocation;
