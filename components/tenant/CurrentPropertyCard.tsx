import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { IRentalRequest } from '@/types/tenant/rentalRequest'
import PropertyInfo from './PropertyInfo'


interface CurrentPropertyCardProps {
  rental: IRentalRequest;
}

const CurrentPropertyCard = ({ rental }: CurrentPropertyCardProps) => {
    const property = rental.property;

  const image =
    property.images?.[0]?.imageUrl ??
    "/images/property-placeholder.jpg";
  return (
    <Card className="overflow-hidden border-border/60 shadow-sm">
      <CardHeader className="flex flex-col gap-3 border-b border-border/40 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <CardTitle className="text-base font-semibold">
              Current Property
            </CardTitle>

            <Badge
              variant="outline"
              className="rounded-full border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-600 dark:text-emerald-500"
            >
              Active
            </Badge>
          </div>

          <CardDescription className="mt-1 text-xs">
            Your currently rented property.
          </CardDescription>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="h-8 w-full text-xs sm:w-auto"
        >
          <Link href={`/properties/${property.id}`}>
            View Property
          </Link>
        </Button>
      </CardHeader>

      <CardContent className="p-4 sm:p-5">
        <div className="flex flex-col gap-5 md:flex-row">

          {/* Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-muted md:w-64 md:shrink-0">
            <img
              src={image}
              alt={property.title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex min-w-0 flex-1 flex-col justify-between gap-5">
            <div className="space-y-2">
              <h3 className="line-clamp-2 text-lg font-semibold tracking-tight">
                {property.title}
              </h3>

              <div className="flex items-start gap-1.5 text-xs text-muted-foreground">
                <MapPin className="mt-0.5 size-3.5 shrink-0 text-primary" />

                <span>
                  {property.address}, {property.city}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 border-y py-3 sm:grid-cols-4">
              <PropertyInfo
                label="Rent"
                value={`৳${Number(property.rentPrice).toLocaleString("en-BD")}`}
              />

              <PropertyInfo
                label="Bedrooms"
                value={`${property.bedrooms} Beds`}
              />

              <PropertyInfo
                label="Bathrooms"
                value={`${property.bathrooms} Baths`}
              />

              <PropertyInfo
                label="Area"
                value={`${property.area ?? "-"} sqft`}
              />
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-muted-foreground">
              <span>
                Start:{" "}
                <strong className="font-medium text-foreground">
                  {new Date(
                    rental.startDate,
                  ).toLocaleDateString("en-BD")}
                </strong>
              </span>

              <span>
                Duration:{" "}
                <strong className="font-medium text-foreground">
                  {rental.durationMonth} months
                </strong>
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default CurrentPropertyCard