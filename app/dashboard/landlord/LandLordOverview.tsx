"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useGetAllPropertiesByLandlord } from "@/hook/property/useProperty";
import {
  ArrowUpRight,
  FileText,
  MapPin,
  Plus,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import DashboardLoadingState from "../common/DashboardLoadingState";

const LandLordOverview = () => {
  const { data: properties } = useGetAllPropertiesByLandlord();
  if (!properties) {
    return <DashboardLoadingState />;
  }
  return (
    <section className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
      {/* ==========================================================
            PORTFOLIO
        =========================================================== */}
      <Card className="overflow-hidden border-border/60 shadow-sm lg:col-span-2">
        <CardHeader className="border-b border-border/40 px-4 py-4 sm:px-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <CardTitle className="text-sm font-semibold sm:text-base">
                Portfolio Highlights
              </CardTitle>

              <CardDescription className="mt-0.5 text-[11px] sm:text-xs">
                Recently managed properties
              </CardDescription>
            </div>

            <Button
              variant="default"
              size="sm"
              className="h-8 gap-1 px-2 text-[11px] sm:text-xs"
            >
              <Link
                className="flex items-center"
                href="/dashboard/landlord/properties"
              >
                <span>View All</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        </CardHeader>
        {properties.length === 0 ? (
          <DashboardLoadingState />
        ) : (
          properties.slice(0, 3).map((property) => (
            <CardContent className="p-0">
              <div className="divide-y divide-border/40">
                {/* Property 1 */}
                <div className="flex items-center gap-3 px-4 py-4 transition-colors hover:bg-muted/20 sm:px-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border bg-muted/40 text-base">
                    🏢
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-medium sm:text-sm">
                      {property.title}
                    </p>

                    <div className="mt-1 flex items-center gap-1.5 text-[10px] text-muted-foreground sm:text-[11px]">
                      <MapPin className="h-3 w-3 shrink-0" />
                      <span>{property.area}</span>
                      <span className="text-border">•</span>
                      <span>
                        ৳ 
                        {property.rentPrice
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                        / month
                      </span>
                    </div>
                  </div>

                  <Badge
                    variant="outline"
                    className="hidden shrink-0 rounded-md text-[10px] font-normal sm:inline-flex"
                  >
                    {property.category.name}
                  </Badge>
                </div>
              </div>
            </CardContent>
          ))
        )}
        {/* Portfolio Footer */}
              <div className="border-t border-border/40 bg-muted/10 px-4 py-3 sm:px-5">
                <div className="flex items-center justify-between text-[10px] text-muted-foreground sm:text-[11px]">
                  <span className="text-accent">3 of {properties?.length || 0} properties shown</span>

                  <Link
                    href="/dashboard/landlord/properties"
                    className="font-medium text-foreground transition-colors hover:text-primary"
                  >
                    Manage portfolio →
                  </Link>
                </div>
              </div>
      </Card>

      {/* ==========================================================
            RIGHT COLUMN
        =========================================================== */}
      <div className="space-y-6">
        {/* Lease Agreements */}
        <Card className="border-border/60 shadow-sm">
          <CardHeader className="px-4 py-4 sm:px-5">
            <CardTitle className="text-sm font-semibold sm:text-base">
              Lease Agreements
            </CardTitle>

            <CardDescription className="text-[11px] sm:text-xs">
              Manage documents and active rental agreements.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-3 px-4 pb-4 sm:px-5">
            <div className="flex items-center justify-between gap-3 rounded-lg border border-border/50 bg-muted/20 p-3">
              <div className="flex min-w-0 items-center gap-2.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-background">
                  <FileText className="h-4 w-4 text-primary" />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-xs font-medium">
                    Tejgaon Office Lease
                  </p>

                  <p className="mt-0.5 text-[10px] text-muted-foreground">
                    Expires Dec 2026
                  </p>
                </div>
              </div>

              <Badge
                variant="secondary"
                className="shrink-0 rounded-md text-[10px]"
              >
                Active
              </Badge>
            </div>

            <Button
              variant="outline"
              size="sm"
              className="h-8 w-full text-[11px] sm:text-xs"
            >
              Generate New Lease Agreement
            </Button>
          </CardContent>
        </Card>

        {/* Payout Information */}
        <Card className="border-border/60 bg-muted/20 shadow-none">
          <CardContent className="p-4 sm:p-5">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-background">
                <ShieldCheck className="h-4 w-4 text-primary" />
              </div>

              <div className="min-w-0">
                <h3 className="text-xs font-semibold">Payout Schedule</h3>

                <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">
                  Automated monthly disbursements are processed on the 1st of
                  every month to your registered bank account.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Action */}
        <Card className="border-border/60 shadow-sm">
          <CardContent className="p-4 sm:p-5">
            <p className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
              Quick Action
            </p>

            <p className="mt-1 text-sm font-semibold">
              Need to add another property?
            </p>

            <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
              Create a new listing and start managing your next rental.
            </p>

            <Button
              variant="outline"
              size="sm"
              className="mt-4 h-8 w-full gap-1.5 text-[11px]"
            >
              <Link href="/dashboard/landlord/properties/add">
                <Plus className="h-3.5 w-3.5" />
                Add Property
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LandLordOverview;
