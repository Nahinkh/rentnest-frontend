"use client";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { ReactNode } from 'react'

interface DashboardHeaderProps {
  title: string;
  description?: string;
  badge?: string;
  badgeIcon?: ReactNode;
  action?: {
    label: string;
    href: string;
    icon?: ReactNode;
  };
}
const DashboardHeader = ({ title, description, badge, badgeIcon, action }: DashboardHeaderProps) => {
  return (
    <section className="flex flex-col gap-5 border-b border-border/50 pb-6 sm:flex-row sm:items-end sm:justify-between">
      {/* Left */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
            {title}
          </h1>

          {badge && (
            <Badge
              variant="secondary"
              className="hidden rounded-full px-2 py-0.5 text-[10px] font-medium sm:inline-flex"
            >
              {badgeIcon}
              {badge}
            </Badge>
          )}
        </div>

        {description && (
          <p className="max-w-2xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
            {description}
          </p>
        )}
      </div>

      {/* Right */}
      {(badge || action) && (
        <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center">
          {badge && (
            <Badge
              variant="outline"
              className="h-8 justify-center gap-1.5 rounded-md bg-card px-3 text-[11px] font-normal"
            >
              {badgeIcon}
              {badge}
            </Badge>
          )}

          {action && (
            <Button
              size="sm"
              className="h-8 w-full gap-1.5 text-xs sm:w-auto"
            >
              <Link
              className='flex items-center' 
              href={action.href}>
                {action.icon}
                {action.label}
              </Link>
            </Button>
          )}
        </div>
      )}
    </section>
  )
}

export default DashboardHeader