import Hero from '@/components/hero/Hero'
import WhyChoose from '@/components/home/WhyChoose'
import PropertyGrid from '@/components/property/PropertyGrid'
import React from 'react'

const page = () => {
  return (
    <div>
        <Hero />
        <PropertyGrid/>
        <WhyChoose />
    </div>
  )
}

export default page