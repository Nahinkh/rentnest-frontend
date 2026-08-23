import { LucideIcon } from 'lucide-react';
import React from 'react'

interface RequestDetailProps {
  icon: LucideIcon;
  label: string;
  value: string;
}
const RequestDetail = ({ icon: Icon, label, value }: RequestDetailProps) => {
  return (
   <div className="min-w-0">
      <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
        <Icon className="size-3" />
        <span>{label}</span>
      </div>

      <p className="mt-0.5 truncate text-xs font-medium">
        {value}
      </p>
    </div>
  )
}

export default RequestDetail