"use client"
import PropertyCard from '@/components/property/PropertyCard'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { useProperties } from '@/hook/property/useProperties'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const RecentProperties = () => {
     const { data: properties = [], isLoading, isError } = useProperties();
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-primary">
              Explore
            </p>

            <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
              Recent Properties
            </h2>

            <p className="mt-2 text-sm text-muted-foreground">
              Discover the latest properties added to RentNest.
            </p>
          </div>

          <Link
            href="/properties"
            className="hidden shrink-0 items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80 sm:flex"
          >
            View All
            <ArrowRight className="size-4" />
          </Link>
        </div>

        {/* Loading */}
        {isLoading && (
          <div className="py-12 text-center text-sm text-muted-foreground">
            Loading properties...
          </div>
        )}

        {/* Error */}
        {isError && (
          <div className="py-12 text-center text-sm text-destructive">
            Failed to load properties.
          </div>
        )}

        {/* Properties */}
        {!isLoading && !isError && properties.length > 0 && (
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {properties.map((property) => (
                <CarouselItem
                  key={property.id}
                  className="pl-4 basis-[82%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                >
                  <PropertyCard property={property} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="left-2 hidden sm:flex" />
            <CarouselNext className="right-2 hidden sm:flex" />
          </Carousel>
        )}

        {/* Empty */}
        {!isLoading && !isError && properties.length === 0 && (
          <div className="rounded-2xl border border-dashed py-12 text-center">
            <p className="text-sm text-muted-foreground">
              No properties available yet.
            </p>
          </div>
        )}

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
  )
}

export default RecentProperties