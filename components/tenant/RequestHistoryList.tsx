import React from 'react'
import { IRentalRequest } from '@/types/tenant/rentalRequest';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import MobileRequestCard from '../layout/MobileRequestCard';
import DesktopRequestRow from '../layout/DesktopRequestRow';

interface RequestHistoryListProps {
  requests: IRentalRequest[];
}
const RequestHistoryList = ({ requests }: RequestHistoryListProps) => {
  return (
    <Card className="border-border/60 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold">
          Rental Requests
        </CardTitle>

        <CardDescription className="text-xs">
          Your complete rental request history.
        </CardDescription>
      </CardHeader>

      <CardContent className="p-0">
        {/* Desktop */}
        <div className="hidden md:block">
          <div className="grid grid-cols-[minmax(240px,2fr)_120px_120px_110px_100px] gap-4 border-y border-border/40 bg-secondary/20 px-5 py-3 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
            <span>Property</span>
            <span>Requested</span>
            <span>Start Date</span>
            <span>Rent</span>
            <span>Status</span>
          </div>

          <div className="divide-y divide-border/40">
            {requests.map((request) => (
              <DesktopRequestRow
                key={request.id}
                request={request}
              />
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="divide-y divide-border/40 md:hidden">
          {requests.map((request) => (
            <MobileRequestCard
              key={request.id}
              request={request}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default RequestHistoryList