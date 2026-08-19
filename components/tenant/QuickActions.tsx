import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import Link from 'next/link';
import { ArrowUpRight, Clock3, CreditCard, FileText, Search } from 'lucide-react';

const QuickActions = () => {
    const actions = [
    {
      title: "Browse Properties",
      description: "Find your next rental",
      icon: Search,
      href: "/properties",
    },
    {
      title: "My Requests",
      description: "Track rental applications",
      icon: Clock3,
      href: "/dashboard/tenant/requests",
    },
    {
      title: "Payments",
      description: "View rent and payments",
      icon: CreditCard,
      href: "/dashboard/tenant/payments",
    },
    {
      title: "Lease Documents",
      description: "View your agreements",
      icon: FileText,
      href: "/dashboard/tenant/rentals",
    },
  ];
  return (
    <Card className="border-border/60 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold">
          Quick Actions
        </CardTitle>

        <CardDescription className="text-xs">
          Frequently used tenant actions.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-2">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="group flex items-center gap-3 rounded-xl border border-border/50 p-3 transition-colors hover:bg-secondary/50"
            >
              <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-secondary">
                <Icon className="size-4 text-primary" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-medium">
                  {action.title}
                </p>

                <p className="mt-0.5 truncate text-[10px] text-muted-foreground">
                  {action.description}
                </p>
              </div>

              <ArrowUpRight className="size-3.5 text-muted-foreground/50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          );
        })}
      </CardContent>
    </Card>
  )
}

export default QuickActions