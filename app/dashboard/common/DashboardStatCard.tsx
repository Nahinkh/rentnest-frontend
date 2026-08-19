import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowUpRight, LucideIcon, TrendingDown, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
interface DashboardStatCardProps {
  title: string;
  value: string | number;
  description?: string;

  icon: LucideIcon;

  iconClassName?: string;
  iconContainerClassName?: string;

  trend?: {
    value: string;
    direction: "up" | "down" | "neutral";
    label?: string;
  };

  href?: string;

  className?: string;
}
const DashboardStatCard = ({ title, value, description, icon: Icon, iconClassName, iconContainerClassName, trend, href, className }: DashboardStatCardProps) => {
    const content = (
    <Card
      className={cn(
        "border-border/60 bg-card shadow-sm transition-all duration-200",
        href &&
          "group cursor-pointer hover:-translate-y-0.5 hover:border-border hover:shadow-md",
        className,
      )}
    >
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <div className="min-w-0">
          <p className="truncate text-xs font-medium text-muted-foreground sm:text-sm">
            {title}
          </p>
        </div>

        <div
          className={cn(
            "flex size-8 shrink-0 items-center justify-center rounded-lg bg-secondary/70",
            iconContainerClassName,
          )}
        >
          <Icon
            className={cn(
              "size-4 text-muted-foreground",
              iconClassName,
            )}
          />
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex items-end justify-between gap-3">
          <div className="min-w-0">
            <div className="truncate text-xl font-semibold tracking-tight sm:text-2xl">
              {value}
            </div>

            {description && (
              <p className="mt-1 truncate text-[11px] text-muted-foreground sm:text-xs">
                {description}
              </p>
            )}

            {trend && (
              <div
                className={cn(
                  "mt-1.5 flex items-center gap-1 text-[11px] font-medium",
                  trend.direction === "up" &&
                    "text-emerald-600 dark:text-emerald-500",
                  trend.direction === "down" &&
                    "text-destructive",
                  trend.direction === "neutral" &&
                    "text-muted-foreground",
                )}
              >
                {trend.direction === "up" && (
                  <TrendingUp className="size-3" />
                )}

                {trend.direction === "down" && (
                  <TrendingDown className="size-3" />
                )}

                <span>{trend.value}</span>

                {trend.label && (
                  <span className="font-normal text-muted-foreground">
                    {trend.label}
                  </span>
                )}
              </div>
            )}
          </div>

          {href && (
            <ArrowUpRight
              className={cn(
                "mb-0.5 size-3.5 shrink-0 text-muted-foreground/50 transition-transform",
                "group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
              )}
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
   if (!href) {
    return content;
   }
  return <Link href={href}>{content}</Link>;
}

export default DashboardStatCard