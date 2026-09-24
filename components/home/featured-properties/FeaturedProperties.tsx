"use client"
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import FeaturedPropertyCard from './FeaturedPropertyCard'
import GlobalError from '@/components/common/GlobalError'
import GlobalLoader from '@/components/common/GlobalLoader'
import { useProperties } from '@/hook/property/useProperties'

const FeaturedProperties = () => {
    const {
    data: properties = [],
    isLoading,
    isError,
    refetch,
  } = useProperties();

  if (isLoading) {
    return (
      <section className="py-12 sm:py-16">
        <GlobalLoader message="Loading featured properties..." />
      </section>
    );
  }

  if (isError) {
    return (
      <section className="py-12 sm:py-16">
        <GlobalError
          message="We couldn't load the featured properties."
          onRetry={() => refetch()}
        />
      </section>
    );
  }

  if (!properties.length) {
    return null;
  }

  const featuredProperty = properties[0];
  const supportingProperties = properties.slice(1, 3);
  return (
     <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-primary">Handpicked</p>

            <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
              Featured Properties
            </h2>

            <p className="mt-2 max-w-xl text-sm text-muted-foreground sm:text-base">
              Discover properties selected for a better renting experience.
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

        {/* Featured Layout */}
        <div className="grid gap-5 lg:grid-cols-2">
          {/* Main Featured Property */}
          <FeaturedPropertyCard
            property={featuredProperty}
            featured
          />

          {/* Supporting Properties */}
          {supportingProperties.length > 0 && (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {supportingProperties.map((property) => (
                <FeaturedPropertyCard
                  key={property.id}
                  property={property}
                />
              ))}
            </div>
          )}
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
  )
}

export default FeaturedProperties