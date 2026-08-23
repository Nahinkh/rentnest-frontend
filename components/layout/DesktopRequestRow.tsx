import { IRentalRequest } from "@/types/tenant/rentalRequest";
import { MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";
import { RequestDate } from "../FromateDate";
import RequestStatusBadge from "../tenant/RequestStatusBadge";

const DesktopRequestRow = ({ request }: { request: IRentalRequest }) => {
  const property = request.property;

  const image =
    property.images?.[0]?.imageUrl ?? "/images/property-placeholder.jpg";
  return (
    <div className="grid grid-cols-[minmax(240px,2fr)_120px_120px_110px_100px] items-center gap-4 px-5 py-4 transition-colors hover:bg-secondary/20">
      {/* Property */}
      <div className="flex min-w-0 items-center gap-3">
        <div className="size-12 shrink-0 overflow-hidden rounded-lg bg-muted">
          <img
            src={image}
            alt={property.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="min-w-0">
          <Link
            href={`/properties/${property.id}`}
            className="line-clamp-1 text-xs font-medium transition-colors hover:text-primary sm:text-sm"
          >
            {property.title}
          </Link>

          <div className="mt-1 flex items-center gap-1 text-[10px] text-muted-foreground">
            <MapPin className="size-3 shrink-0" />

            <span className="truncate">
              {property.city}, {property.division}
            </span>
          </div>
        </div>
      </div>

      {/* Requested */}
      <RequestDate date={request.createdAt} />

      {/* Start */}
      <RequestDate date={request.startDate} />

      {/* Rent */}
      <div>
        <p className="text-xs font-semibold">
          ৳{Number(property.rentPrice).toLocaleString("en-BD")}
        </p>

        <p className="text-[10px] text-muted-foreground">/month</p>
      </div>

      {/* Status */}
      <RequestStatusBadge status={request.status} />
    </div>
  );
};

export default DesktopRequestRow;
