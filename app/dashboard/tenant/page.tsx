"use client";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import RoleProtectedRoute from "@/components/auth/RoleProtectedRoute";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertCircle,
  ArrowUpRight,
  Building,
  Calendar,
  CheckCircle,
  CheckCircle2,
  Clock3,
  CreditCard,
  FileText,
  Home,
  Search,
  ShieldCheck,
  Wrench,
  XCircle,
} from "lucide-react";
import DashboardHeader from "../common/DashboardHeader";
import DashboardStatCard from "../common/DashboardStatCard";
import CurrentRental from "@/components/tenant/CurrentRental";
import QuickActions from "@/components/tenant/QuickActions";
import RecentRequests from "@/components/tenant/RecentRequests";
import { useGetMyRentalRequests } from "@/hook/tenant/useTenant";
import DashboardLoadingState from "../common/DashboardLoadingState";
import DashboardErrorState from "../common/DashboardErrorState";

const TenantDashboard = () => {
  const {
    data: rentalRequests = [],
    isLoading,
    isError,
  } = useGetMyRentalRequests();
  const recentRequests = rentalRequests.slice(0, 5);
  const pendingRequests = rentalRequests.filter(
    (request) => request.status === "PENDING",
  ).length;

  const approvedRequests = rentalRequests.filter(
    (request) => request.status === "APPROVED",
  ).length;

  const rejectedRequests = rentalRequests.filter(
    (request) => request.status === "REJECTED",
  ).length;
  if (isLoading) {
    return <DashboardLoadingState />;
  }

  if (isError) {
    return <DashboardErrorState />;
  }
  return (
    <div className="h-full w-full overflow-hidden bg-background">
      <div className="h-full overflow-y-auto">
        <main className="mx-auto w-full max-w-7xl space-y-6 px-4 py-6 sm:px-6 lg:px-8">
          {/* =====================================================
              HEADER
          ====================================================== */}
          <DashboardHeader
            title="Tenant Dashboard"
            description="Manage your rental requests, active rentals, payments, and property activity from one place."
            badge="Verified Tenant"
            badgeIcon={<ShieldCheck className="h-3.5 w-3.5 text-primary" />}
            action={{
              label: "Browse Properties",
              href: "/properties",
              icon: <Search className="h-3.5 w-3.5" />,
            }}
          />

          {/* =====================================================
              STATS
          ====================================================== */}
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <DashboardStatCard
              title="Active Rental"
              value="1 Property"
              description="Gulshan, Dhaka"
              icon={Building}
              href="/dashboard/tenant/rentals"
            />

            {
              // Pending Requests
              pendingRequests > 0 && (
                <DashboardStatCard
                  title="Pending Requests"
                  value={` ${pendingRequests} Requests`}
                  description="Awaiting landlord review"
                  icon={Clock3}
                  href="/dashboard/tenant/requests"
                />
              )
            }
            {
              // Approved Requests
              approvedRequests > 0 && (
                <DashboardStatCard
                  title="Approved Requests"
                  value={` ${approvedRequests} Requests`}
                  description="Landlord has approved"
                  icon={CheckCircle}
                  href="/dashboard/tenant/requests"
                />
              )
            }
            {rejectedRequests > 0 && (
              <DashboardStatCard
                title="Rejected Requests"
                value={` ${rejectedRequests} Requests`}
                description="Landlord has rejected"
                icon={XCircle}
                href="/dashboard/tenant/requests"
              />
            )}

            <DashboardStatCard
              title="Next Payment"
              value="৳28,000"
              description="Due September 01"
              icon={CreditCard}
              href="/dashboard/tenant/payments"
            />

            <DashboardStatCard
              title="Rental Status"
              value="Active"
              description="Payments up to date"
              icon={CheckCircle2}
              iconClassName="text-emerald-500"
            />
          </section>

          {/* =====================================================
              MAIN CONTENT
          ====================================================== */}
          <section className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
            {/* Current Rental */}
            <div className="lg:col-span-2">
              <CurrentRental />
            </div>

            {/* Quick Actions */}
            <div>
              <QuickActions />
            </div>
          </section>

          {/* =====================================================
              RECENT REQUESTS
          ====================================================== */}
          {
            // Only show recent requests if there are any
            recentRequests.length > 0 && (
              <RecentRequests requests={recentRequests} />
            )
          }
        </main>
      </div>
    </div>
  );
};

export default TenantDashboard;
