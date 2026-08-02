import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HeroSearch from './HeroSearch'

const Hero = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto grid items-center gap-16 px-4 lg:grid-cols-2">
        <div>
          <Badge className="mb-5">
            🏠 Trusted Rental Marketplace
          </Badge>

          <h1 className="max-w-xl text-5xl font-bold leading-tight lg:text-7xl">
            Find Your Perfect Home with{" "}
            <span className="text-primary">RentNest</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            Browse verified rental properties, connect directly with
            landlords, and book your next home with confidence.
          </p>

          {/* <div className="mt-10 flex gap-4">
            <Button size="lg">
              <Link href="/properties">
                Browse Properties
              </Link>
            </Button>

            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div> */}
          <HeroSearch/>

          <div className="mt-10 flex gap-10">
            <div>
              <h2 className="text-3xl font-bold text-primary">
                5000+
              </h2>

              <p className="text-muted-foreground">
                Happy Renters
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-primary">
                1200+
              </h2>

              <p className="text-muted-foreground">
                Properties
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-primary">
                98%
              </h2>

              <p className="text-muted-foreground">
                Satisfaction
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <Image
            src="/hero-house.png"
            alt="House"
            width={700}
            height={600}
            className="rounded-3xl object-cover shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default Hero