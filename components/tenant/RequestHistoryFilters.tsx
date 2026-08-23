import { IRentalRequest, RequestFilter } from '@/types/tenant/rentalRequest';
import React from 'react'

interface RequestHistoryFiltersProps {
  value: RequestFilter;
  onChange: (value: RequestFilter) => void;
  requests: IRentalRequest[];
}

const RequestHistoryFilters = ({ value, onChange, requests }: RequestHistoryFiltersProps) => {
     const filters: {
    label: string;
    value: RequestFilter;
  }[] = [
    {
      label: "All",
      value: "ALL",
    },
    {
      label: "Pending",
      value: "PENDING",
    },
    {
      label: "Approved",
      value: "APPROVED",
    },
    {
      label: "Rejected",
      value: "REJECTED",
    },
    {
      label: "Cancelled",
      value: "CANCELLED",
    },
  ];

  const getCount = (filter: RequestFilter) => {
    if (filter === "ALL") {
      return requests.length;
    }

    return requests.filter(
      (request) => request.status === filter,
    ).length;
  };
  return (
     <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex w-full gap-1 overflow-x-auto rounded-lg border border-border/60 bg-card p-1 sm:w-auto">
        {filters.map((item) => {
          const active = value === item.value;

          return (
            <button
              key={item.value}
              type="button"
              onClick={() => onChange(item.value)}
              className={[
                "flex shrink-0 items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
                active
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground",
              ].join(" ")}
            >
              {item.label}

              <span
                className={[
                  "rounded-full px-1.5 py-0.5 text-[9px]",
                  active
                    ? "bg-primary-foreground/15"
                    : "bg-secondary",
                ].join(" ")}
              >
                {getCount(item.value)}
              </span>
            </button>
          );
        })}
      </div>

      <p className="text-[11px] text-muted-foreground">
        {requests.length} total{" "}
        {requests.length === 1
          ? "request"
          : "requests"}
      </p>
    </div>
  )
}

export default RequestHistoryFilters