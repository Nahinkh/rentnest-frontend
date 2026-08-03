"use client"

import React from 'react'
import PropertyCard from './PropertyCard'
import { useProperties } from '@/hook/property/useProperties';

const PropertyGrid = () => {
    const { data: properties, isPending, isError } = useProperties();
      if (isPending) {
        return <p>Loading...</p>;
      }
    
      if (isError) {
        return <p>Something went wrong.</p>;
      }
  return (
     <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="text-primary font-semibold">
              Featured Properties
            </p>

            <h2 className="mt-2 text-4xl font-bold">
              Discover Your Next Home
            </h2>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {properties?.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PropertyGrid