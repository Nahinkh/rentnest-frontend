import { Button } from '@/components/ui/button'
import { MapPin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const LocationSelector = () => {
  return (
    <Button
          
          variant="outline"
          size="sm"
          className="hidden h-9 gap-1.5 rounded-full px-3 text-muted-foreground hover:text-foreground sm:inline-flex"
        >
          <Link href="/properties?division=dhaka" className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4" />
            <span>Dhaka</span>
          </Link>
        </Button>
  )
}

export default LocationSelector 