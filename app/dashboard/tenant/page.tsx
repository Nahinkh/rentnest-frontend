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
  Calendar,
  CreditCard,
  FileText,
  Home,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import React from "react";

const TenantPage = () => {
  return (
    <div className="h-[calc(100vh-4rem)] w-full flex flex-col overflow-hidden bg-background">
      {/* Scrollable Workspace Container */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 space-y-6 max-w-7xl mx-auto w-full">
        {/* Welcome Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/40 pb-5">
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Tenant Dashboard
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Manage your active lease, recurring rent payments, and property
              requests.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className="gap-1.5 py-1 px-3 text-xs bg-card"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
              Verified Tenant Status
            </Badge>
          </div>
        </div>

        {/* Quick Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="border-border/60 shadow-sm bg-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">
                Active Property
              </CardTitle>
              <Home className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-lg sm:text-xl font-bold tracking-tight truncate">
                High-Rise Townhouse
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">
                Unit #402, California
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/60 shadow-sm bg-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">
                Next Rent Due
              </CardTitle>
              <CreditCard className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-lg sm:text-xl font-bold tracking-tight">
                $2,400.00
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">
                Due Sept 1, 2026
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/60 shadow-sm bg-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">
                Lease Expiration
              </CardTitle>
              <Calendar className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-lg sm:text-xl font-bold tracking-tight">
                Oct 31, 2026
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">
                8 months remaining
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/60 shadow-sm bg-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">
                Maintenance Requests
              </CardTitle>
              <Wrench className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-lg sm:text-xl font-bold tracking-tight">
                0 Active
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">
                All issues cleared
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start pb-6">
          {/* Left Column: Lease & Quick Actions */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Rent Payment Card */}
            <div className="border border-border/60 rounded-2xl p-6 bg-card shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-base">
                    Automated Rent Settlement
                  </h3>
                  <Badge variant="secondary" className="text-[10px]">
                    Secure
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground max-w-md">
                  Your electronic payment for the current billing cycle is
                  ready. Transactions are fully encrypted.
                </p>
              </div>
              <Button size="sm" className="w-full sm:w-auto shrink-0 gap-2">
                Pay Rent Now <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Recent Lease Invoices / Documents */}
            <Card className="border-border/60 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base font-semibold">
                  Lease Documents & Invoices
                </CardTitle>
                <CardDescription className="text-xs">
                  Download signed agreements and payment receipts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="divide-y divide-border/40 text-sm">
                  <div className="py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileText className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium text-xs sm:text-sm">
                          Master Lease Agreement (Signed)
                        </p>
                        <p className="text-[11px] text-muted-foreground">
                          Executed on Nov 1, 2025
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-xs">
                      Download
                    </Button>
                  </div>
                  <div className="py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileText className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium text-xs sm:text-sm">
                          August 2026 Rent Receipt
                        </p>
                        <p className="text-[11px] text-muted-foreground">
                          Paid on Aug 1, 2026
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-xs">
                      Receipt
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Landlord Contact & Support Notice */}
          <div className="space-y-6">
            <Card className="border-border/60 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base font-semibold">
                  Assigned Landlord
                </CardTitle>
                <CardDescription className="text-xs">
                  Direct property manager contact details.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-xl border border-border/40 bg-secondary/20">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-bold text-xs text-foreground">
                    RD
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">Rachel Diaz</h4>
                    <p className="text-xs text-muted-foreground">
                      rachel.properties@vesta.io
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full text-xs">
                  Send Direct Message
                </Button>
              </CardContent>
            </Card>

            <div className="border border-border/60 rounded-2xl bg-secondary/20 p-5 space-y-2">
              <div className="flex items-center gap-2 text-foreground font-medium text-xs">
                <AlertCircle className="w-4 h-4 text-primary" />
                Need Emergency Maintenance?
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                For urgent plumbing or structural emergencies, contact the
                property supervisor hotline immediately via your mobile portal
                app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantPage;
