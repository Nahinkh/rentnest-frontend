import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MapPin, Search } from 'lucide-react'
import React from 'react'

const HeroSearch = () => {
  return (
    <div className="mt-10 rounded-2xl border bg-card p-3 shadow-lg">
      <div className="flex flex-col gap-3 md:flex-row">
        <div className="relative flex-1">
          <MapPin className="text-muted-foreground absolute top-1/2 left-4 size-5 -translate-y-1/2" />

          <Input
            placeholder="Search by city or location..."
            className="h-12 border-0 pl-11 shadow-none focus-visible:ring-0"
          />
        </div>

        <Button size="lg" className="h-12 px-8">
          <Search className="mr-2 size-4" />
          Search
        </Button>
      </div>
    </div>
  )
}

export default HeroSearch