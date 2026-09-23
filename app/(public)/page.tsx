
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
        {/* <PropertyGrid/> */}
        <WhyChoose />
    </div>
  )
}

export default page