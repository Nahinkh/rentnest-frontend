import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button'
import { BadgeCheck, Heart, MapPin, Share2, Star } from 'lucide-react'
import React from 'react'

interface PropertyHeaderProps {
  title: string;
  address: string;
  city: string;
  division: string;
  category: string;
  availability: string;
  rating?: number;
  reviews?: number;
  rentPrice?: number | string;
  area?: number | string;
}
const PropertyHeader = ({ title, address, city, division, rating=4.9, rentPrice, area, reviews=28 }: PropertyHeaderProps) => {
  return (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/40 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="font-medium text-xs">For Rent</Badge>
              <div className="flex items-center text-amber-500 text-sm gap-1">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-semibold text-foreground">{rating}</span>
                <span className="text-muted-foreground text-xs">({reviews} reviews)</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h1>
            <p className="text-sm text-muted-foreground flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-primary" />
              {address}, {city}, {division}
            </p>
          </div>
          <div className="text-left md:text-right">
            <div className="text-3xl font-bold tracking-tight">৳ {Number(rentPrice as number).toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">{area}/ sq.ft</p>
          </div>
        </div>

  )
}

export default PropertyHeader