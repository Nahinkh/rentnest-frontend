import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MapPin, Search } from 'lucide-react'
import React from 'react'

const HeroSearch = () => {
  return (
    <div className="mt-8 w-full max-w-3xl rounded-2xl border border-white/20 bg-background/95 p-2 shadow-2xl backdrop-blur-md">
      <div className="flex flex-col gap-2 md:flex-row">
        {/* Location */}
        <div className="relative flex-1">
          <MapPin className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

          <Input
            type="text"
            placeholder="Search by location"
            className="h-12 border-0 bg-transparent pl-11 shadow-none focus-visible:ring-0"
          />
        </div>

        {/* Property Type */}
        <div className="flex flex-1 items-center rounded-xl border border-border/60 px-4">
          <span className="text-sm text-muted-foreground">
            Property Type
          </span>
        </div>

        {/* Search */}
        <Button
          size="lg"
          className="h-12 rounded-xl px-6"
        >
          <Search className="mr-2 h-4 w-4" />
          Search
        </Button>
      </div>
    </div>
  )
}

export default HeroSearch