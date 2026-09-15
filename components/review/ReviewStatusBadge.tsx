import { ReviewStatus } from '@/types/review/review.type';
import React from 'react'
import { Badge } from '../ui/badge';

const ReviewStatusBadge = ({ status }: { status: ReviewStatus }) => {
      const config = {
    VISIBLE: {
      label: "Published",
      className:
        "border-emerald-500/30 bg-emerald-500/10 text-emerald-600",
    },

    HIDDEN: {
      label: "Hidden",
      className:
        "border-border bg-secondary text-muted-foreground",
    },
  };

  const current =
    config[status] ?? config.HIDDEN;
  return (
   <Badge
      variant="outline"
      className={`rounded-full px-2.5 py-0.5 text-[9px] ${current.className}`}
    >
      {current.label}
    </Badge>
  )
}

export default ReviewStatusBadge