import React from 'react'

interface PropertyInfoProps {
  label: string;
  value: string;
}

const PropertyInfo = ({ label, value }: PropertyInfoProps) => {
  return (
    <div className="min-w-0">
      <p className="text-[10px] text-muted-foreground">
        {label}
      </p>

      <p className="mt-0.5 truncate text-xs font-semibold">
        {value}
      </p>
    </div>
  )
}

export default PropertyInfo