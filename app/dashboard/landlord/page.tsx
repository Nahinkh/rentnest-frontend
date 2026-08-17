"use client";
import RoleProtectedRoute from "@/components/auth/RoleProtectedRoute";
import LandLordMetrics from "./LandLordMetrics";
import LandLordOverview from "./LandLordOverview";
import DashboardHeader from "../common/DashboardHeader";
import { ShieldCheck } from "lucide-react";

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
                  href: "/landlord/properties/new"
                }}
                badge="Overview"
                badgeIcon={<ShieldCheck className="h-3.5 w-3.5 text-primary" />}
                key={"landlord-dashboard-header"}
              />
              <LandLordMetrics />
              <LandLordOverview />
            </div>
          </div>
        </div>
      </RoleProtectedRoute>
    </>
  );
};

export default LandlordPage;
