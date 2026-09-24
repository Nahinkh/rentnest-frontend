"use client";
import RoleProtectedRoute from "@/components/auth/RoleProtectedRoute";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, ClipboardList, CreditCard, Users } from "lucide-react";
import React from "react";
import RecentActivity from "./RecentActivity";
import { useAdminDashboardStats } from "@/hook/admin/useAdminDashboardStats";

const AdminPage = () => {
  const {
  data: stats,
  isLoading,
  isError,
  refetch,
} = useAdminDashboardStats();
  const dashboardStats  = [
    {
    title: "Total Users",
    value: stats?.totalUsers ?? 0,
    description: "Registered users",
    icon: Users,
  },
  {
    title: "Properties",
    value: stats?.totalProperties ?? 0,
    description: "Listed properties",
    icon: Building2,
  },
  {
    title: "Rental Requests",
    value: stats?.totalRentalRequests ?? 0,
    description: "Rental requests",
    icon: ClipboardList,
  },
  {
    title: "Payments",
    value: stats?.totalPayments ?? 0,
    description: "Platform transactions",
    icon: CreditCard,
  },
  ];
  return (
    <>
      <RoleProtectedRoute allowedRoles={["admin"]}>
        <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:py-8">
          {/* Header */}
          <div>
            <p className="text-sm font-medium text-primary">Administration</p>

            <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
              Dashboard Overview
            </h1>

            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              Monitor and manage the RentNest platform from one place.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {dashboardStats.map((stat) => {
              const Icon = stat.icon;

              return (
                <Card key={stat.title} className="rounded-2xl border-border/60">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {stat.title}
                        </p>

                        <p className="mt-2 text-2xl font-bold tracking-tight">
                          {stat.value}
                        </p>

                        <p className="mt-1 text-xs text-muted-foreground">
                          {stat.description}
                        </p>
                      </div>

                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="size-5" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          {/* Recent Activity */}
          <div className="mt-6">
            <RecentActivity  />
          </div>
        </div>
      </RoleProtectedRoute>
    </>
  );
};

export default AdminPage;
