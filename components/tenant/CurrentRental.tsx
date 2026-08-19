"use client"
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { ArrowUpRight, Building, MapPin } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { useCurrentRental } from '@/hook/tenant/useTenant'

const CurrentRental = () => {
  const { data: currentRental } = useCurrentRental()
  return (
     <Card className="overflow-hidden border-border/60 shadow-sm">
      <CardHeader className="flex flex-row items-start justify-between gap-4 pb-4">
        <div>
          <CardTitle className="text-base font-semibold">
            Current Rental
          </CardTitle>

          <CardDescription className="mt-1 text-xs">
            Your currently active rental property.
          </CardDescription>
        </div>

        <Badge
          variant="outline"
          className="gap-1.5 rounded-full px-2.5 py-1 text-[10px]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Active
        </Badge>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col gap-5 sm:flex-row">
          {/* Property Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-secondary sm:w-52 sm:shrink-0">
            <div className="flex h-full items-center justify-center">
              <Building className="h-10 w-10 text-muted-foreground/40" />
            </div>
          </div>

          {/* Property Information */}
          <div className="flex min-w-0 flex-1 flex-col justify-between gap-5">
            <div className="space-y-2">
              <h3 className="line-clamp-1 text-lg font-semibold tracking-tight">
                {currentRental?.property?.title || "Luxury Glasshouse Apartment"}
              </h3>

              <div className="flex items-start gap-1.5 text-xs text-muted-foreground">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />

                <span>
                  {currentRental?.property?.address || "House 12, Road 5, Gulshan, Dhaka"}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 border-y py-3 sm:grid-cols-3">
              <div>
                <p className="text-[10px] text-muted-foreground">
                  Monthly Rent
                </p>

                <p className="mt-0.5 text-sm font-semibold">
                  {currentRental?.property?.rentPrice || "৳28,000"}
                </p>
              </div>

              <div>
                <p className="text-[10px] text-muted-foreground">
                  Lease Expires
                </p>

                <p className="mt-0.5 text-sm font-semibold">
                  {currentRental?.property?.updatedAt || "Dec 2026"}
                </p>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="text-[10px] text-muted-foreground">
                  Occupancy
                </p>

                <p className="mt-0.5 text-sm font-semibold">
                  Active
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <Button
                
                size="sm"
                className="h-8 text-xs"
              >
                <Link href="/dashboard/tenant/rentals">
                  View Rental
                  <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </Button>

              <Button
                
                variant="outline"
                size="sm"
                className="h-8 text-xs"
              >
                <Link href="/dashboard/tenant/payments">
                  Payment History
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default CurrentRental