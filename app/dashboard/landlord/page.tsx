"use client";
import RoleProtectedRoute from "@/components/auth/RoleProtectedRoute";
import LandLordOverview from "./LandLordOverview";
import DashboardHeader from "../common/DashboardHeader";
import { Building, DollarSign, ShieldCheck, Users, Wrench } from "lucide-react";
import DashboardStatCard from "../common/DashboardStatCard";

const LandlordPage = () => {
  return (
    <>
      <RoleProtectedRoute allowedRoles={["landlord"]}>
        <div className="h-[calc(100vh-4rem)] w-full overflow-hidden bg-background">
          <div className="mx-auto flex h-full w-full max-w-7xl flex-col overflow-y-auto px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
            <div className="space-y-6 pb-8">
              <DashboardHeader
                title="Landlord Dashboard"
                description="Monitor your rental portfolio, revenue, tenants, and active lease activity from one place."
                action={{
                  label: "Add Property",
                  href: "/landlord/properties/new",
                }}
                badge="Overview"
                badgeIcon={<ShieldCheck className="h-3.5 w-3.5 text-primary" />}
                key={"landlord-dashboard-header"}
              />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <DashboardStatCard
                  title="Total Properties"
                  value="4 Units"
                  description="3 Active, 1 Pending"
                  icon={Building}
                />

                <DashboardStatCard
                  title="Monthly Revenue"
                  value="৳103,000"
                  icon={DollarSign}
                  trend={{
                    value: "+12%",
                    label: "from last month",
                    direction: "up",
                  }}
                />

                <DashboardStatCard
                  title="Active Tenants"
                  value="3 Tenants"
                  description="100% occupancy rate"
                  icon={Users}
                />

                <DashboardStatCard
                  title="Open Maintenance"
                  value="1 Request"
                  description="Pending contractor response"
                  icon={Wrench}
                />
              </div>
              <LandLordOverview />
            </div>
          </div>
        </div>
      </RoleProtectedRoute>
    </>
  );
};

export default LandlordPage;
