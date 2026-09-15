import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HeroSearch from './HeroSearch'
import { ArrowRight, MapPin, Search } from 'lucide-react'
import { Input } from '../ui/input'

const Hero = () => {
  return (
     <section className="relative isolate overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg"
        alt="Beautiful rental home"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[520px] max-w-7xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:min-h-[600px]">
        {/* Heading */}
        <div className="max-w-3xl space-y-4 text-white">
          <p className="text-sm font-medium tracking-wide text-white/80">
            FIND YOUR NEXT HOME
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Find a place you&apos;ll love to call home.
          </h1>

          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
            Discover comfortable homes and apartments in locations that fit
            your lifestyle and budget.
          </p>
        </div>

        {/* Search */}
        <div className="mt-8 w-full max-w-4xl">
          <div className="rounded-2xl bg-background/95 p-2 shadow-2xl backdrop-blur-md sm:p-3">
            <div className="grid gap-2 sm:grid-cols-[1.2fr_1fr_auto]">
              {/* Location */}
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                  placeholder="Search by location"
                  className="h-12 border-0 bg-muted/50 pl-10 shadow-none focus-visible:ring-1"
                />
              </div>

              {/* Property Type */}
              <div className="relative">
                <select
                  className="h-12 w-full appearance-none rounded-md border-0 bg-muted/50 px-4 text-sm text-foreground outline-none focus:ring-1 focus:ring-ring"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Property type
                  </option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="studio">Studio</option>
                  <option value="room">Room</option>
                </select>
              </div>

              {/* Search Button */}
              <Button
                size="lg"
                className="h-12 gap-2 px-6"
              >
                <Search className="h-4 w-4" />
                Search
              </Button>
            </div>
          </div>
        </div>

        {/* Browse Properties */}
        <Button
          
          variant="outline"
          size="lg"
          className="mt-6 gap-2 rounded-full border-white/30 bg-white/10 px-6 text-white backdrop-blur-sm hover:bg-white hover:text-foreground"
        >
          <Link href="/properties">
            Browse Properties
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}

export default Hero