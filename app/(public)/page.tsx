
import BrowseByLocation from '@/components/home/browse-location/BrowseByLocation'
import FeaturedProperties from '@/components/home/featured-properties/FeaturedProperties'
import Hero from '@/components/home/hero/Hero'
import RecentProperties from '@/components/home/recent-properties/RecentProperties'
import WhyChoose from '@/components/home/WhyChoose'
import PropertyGrid from '@/components/property/PropertyGrid'
import React from 'react'

const page = () => {
  return (
    <div>
        <Hero />
        <RecentProperties />
        <BrowseByLocation />
        <FeaturedProperties/>
        <WhyChoose />
    </div>
  )
}

export default page