import React from "react";
import RequestStatusBadge from "../tenant/RequestStatusBadge";
import Link from "next/link";
import { ArrowUpRight, Building, CalendarDays, Clock3, MapPin } from "lucide-react";
import RequestDetail from "../tenant/RequestDetail";
import { IRentalRequest, RequestRowProps } from "@/types/tenant/rentalRequest";
import { Button } from "../ui/button";
import { formatDate } from "../FromateDate";

const MobileRequestCard = ({ request }: { request: IRentalRequest }) => {
  const property = request?.property;

  const image =
    property.images?.[0]?.imageUrl ?? "/images/property-placeholder.jpg";
  return (
    <div className="space-y-4 p-4">
      {/* Property */}
      <div className="flex items-start gap-3">
        <div className="size-16 shrink-0 overflow-hidden rounded-xl bg-muted">
          <img
            src={image}
            alt={property.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <Link
              href={`/properties/${property.id}`}
              className="line-clamp-2 text-sm font-semibold hover:text-primary"
            >
              {property.title}
            </Link>

            <RequestStatusBadge status={request.status} />
          </div>

          <div className="mt-1 flex items-center gap-1 text-[10px] text-muted-foreground">
            <MapPin className="size-3 shrink-0" />

            <span className="truncate">
              {property.city}, {property.division}
            </span>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="grid grid-cols-2 gap-3 rounded-xl bg-secondary/30 p-3">
        <RequestDetail
          icon={CalendarDays}
          label="Requested"
          value={formatDate(request.createdAt)}
        />

        <RequestDetail
          icon={CalendarDays}
          label="Start Date"
          value={formatDate(request.startDate)}
        />

        <RequestDetail
          icon={Clock3}
          label="Duration"
          value={`${request.durationMonth} months`}
        />

        <RequestDetail
          icon={Building}
          label="Monthly Rent"
          value={`৳${Number(property.rentPrice).toLocaleString("en-BD")}`}
        />
      </div>

      {/* Action */}
      <Button
        variant="outline"
        size="sm"
        className="h-8 w-full text-xs"
      >
        <Link href={`/properties/${property.id}`}>
          View Property
          <ArrowUpRight className="ml-1 size-3.5" />
        </Link>
      </Button>
    </div>
  );
};

export default MobileRequestCard;
