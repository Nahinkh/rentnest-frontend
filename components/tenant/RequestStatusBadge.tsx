import React from 'react'
import { Badge } from '../ui/badge';
import { RequestStatusBadgeProps } from '@/types/tenant/rentalRequest';

const RequestStatusBadge = ({ status }: RequestStatusBadgeProps) => {
    const config = {
    PENDING: {
      className:
        "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-500",
    },
    APPROVED: {
      className:
        "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-500",
    },
    REJECTED: {
      className:
        "border-destructive/30 bg-destructive/10 text-destructive",
    },
    CANCELLED: {
      className:
        "border-muted-500/30 bg-muted-500/10 text-muted-500",
    },
  };
  return (
     <Badge
      variant="outline"
      className={`w-fit rounded-full px-2.5 py-1 text-[10px] font-medium ${config[status].className}`}
    >
      {status}
    </Badge>
  )
}

export default RequestStatusBadge