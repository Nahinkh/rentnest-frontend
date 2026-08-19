import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ArrowUpRight, Building } from 'lucide-react'
import RequestStatusBadge from './RequestStatusBadge'
import { IRentalRequest, RequestStatusBadgeProps } from '@/types/tenant/rentalRequest'

const RecentRequests = ({ requests }: { requests: IRentalRequest[] }) => {
  console.log(requests)
    const tenantRequests = [
    {
      id: "1",
      property: "Luxury Glasshouse Apartment",
      location: "Gulshan, Dhaka",
      date: "Aug 17, 2026",
      status: "Pending",
    },
    {
      id: "2",
      property: "Modern Family Apartment",
      location: "Uttara, Dhaka",
      date: "Aug 12, 2026",
      status: "Approved",
    },
    {
      id: "3",
      property: "City View Residence",
      location: "Banani, Dhaka",
      date: "Aug 08, 2026",
      status: "Rejected",
    },
  ];
  return (
     <Card className="border-border/60 shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between gap-4 pb-3">
        <div>
          <CardTitle className="text-base font-semibold">
            Recent Rental Requests
          </CardTitle>

          <CardDescription className="text-xs">
            Track the latest properties you've requested.
          </CardDescription>
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="h-8 gap-1 text-xs"
        >
          <Link href="/dashboard/tenant/requests">
            View All
            <ArrowUpRight className="size-3.5" />
          </Link>
        </Button>
      </CardHeader>

      <CardContent>
        <div className="divide-y divide-border/40">
          {requests.map((request) => (
            <div
              key={request.id}
              className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-secondary">
                  <Building className="size-4 text-muted-foreground" />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-xs font-medium sm:text-sm">
                    {request?.property.title}
                  </p>

                  <div className="mt-0.5 flex flex-wrap items-center gap-x-2 text-[10px] text-muted-foreground sm:text-[11px]">
                    <span>{request?.property.address}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{request.property.createdAt}</span>
                  </div>
                </div>
              </div>

              <RequestStatusBadge
                status={request?.status as RequestStatusBadgeProps["status"]}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default RecentRequests