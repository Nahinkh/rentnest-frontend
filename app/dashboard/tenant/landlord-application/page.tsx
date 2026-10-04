"use client";
import { useMyLandlordApplication } from "@/hook/auth/useMyLandlordApplication";
import React from "react";
import DashboardLoadingState from "../../common/DashboardLoadingState";
import DashboardErrorState from "../../common/DashboardErrorState";
import DashboardHeader from "../../common/DashboardHeader";
import { Building2, CheckCircle2, Clock3, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type LandlordApplication = {
  status: "PENDING" | "APPROVED" | "REJECTED";
  createdAt: string | Date;
  reason?: string | null;
  additionalInfo?: string | null;
  reviewedAt?: string | Date | null;
  rejectionReason?: string | null;
};

const LandLordApplicationPage = () => {
  const { data: application, isLoading, isError } = useMyLandlordApplication();
  const landlordApplication = application as LandlordApplication | null | undefined;

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
          <DashboardHeader
            title="Landlord Application"
            description="Track the status of your application to become a RentNest landlord."
          />

          {!landlordApplication ? (
            <div className="rounded-xl border border-border bg-card p-8 text-center">
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Building2 className="size-6" />
              </div>

              <h3 className="mt-4 text-lg font-semibold">
                Become a RentNest Landlord
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
                Apply to become a landlord and start listing your properties on
                RentNest.
              </p>

              <Button  className="mt-5 rounded-xl">
                <Link href="/dashboard/tenant/apply-landlord">
                  Apply as Landlord
                </Link>
              </Button>
            </div>
          ) : (
            <div className="mx-auto w-full max-w-2xl">
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                {/* Status */}
                <div className="flex flex-col items-center text-center">
                  {landlordApplication.status === "PENDING" && (
                    <>
                      <div className="flex size-14 items-center justify-center rounded-full bg-yellow-500/10 text-yellow-600 dark:text-yellow-400">
                        <Clock3 className="size-7" />
                      </div>

                      <h2 className="mt-4 text-xl font-semibold">
                        Application Under Review
                      </h2>

                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        Your landlord application has been submitted and is
                        currently being reviewed by our admin team.
                      </p>
                    </>
                  )}

                  {landlordApplication.status === "APPROVED" && (
                    <>
                      <div className="flex size-14 items-center justify-center rounded-full bg-green-500/10 text-green-600 dark:text-green-400">
                        <CheckCircle2 className="size-7" />
                      </div>

                      <h2 className="mt-4 text-xl font-semibold">
                        Application Approved
                      </h2>

                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        Congratulations! You are now a RentNest landlord and can
                        start listing your properties.
                      </p>

                      <Button  className="mt-5 rounded-xl">
                        <Link href="/dashboard/landlord/properties/add">
                          List Your Property
                        </Link>
                      </Button>
                    </>
                  )}

                  {landlordApplication.status === "REJECTED" && (
                    <>
                      <div className="flex size-14 items-center justify-center rounded-full bg-red-500/10 text-red-600 dark:text-red-400">
                        <XCircle className="size-7" />
                      </div>

                      <h2 className="mt-4 text-xl font-semibold">
                        Application Rejected
                      </h2>

                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        Your landlord application was not approved at this time.
                      </p>
                    </>
                  )}
                </div>

                {/* Application details */}
                <div className="mt-8 space-y-5 border-t pt-6">
                  <div>
                    <p className="text-sm font-medium">Applied on</p>

                    <p className="mt-1 text-sm text-muted-foreground">
                      {new Date(landlordApplication.createdAt).toLocaleDateString(
                        "en-BD",
                        {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        },
                      )}
                    </p>
                  </div>

                  {landlordApplication.reason && (
                    <div>
                      <p className="text-sm font-medium">Application reason</p>

                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        {landlordApplication.reason}
                      </p>
                    </div>
                  )}

                  {landlordApplication.additionalInfo && (
                    <div>
                      <p className="text-sm font-medium">
                        Additional information
                      </p>

                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        {landlordApplication.additionalInfo}
                      </p>
                    </div>
                  )}

                  {landlordApplication.reviewedAt && (
                    <div>
                      <p className="text-sm font-medium">Reviewed on</p>

                      <p className="mt-1 text-sm text-muted-foreground">
                        {new Date(landlordApplication.reviewedAt).toLocaleDateString(
                          "en-BD",
                          {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          },
                        )}
                      </p>
                    </div>
                  )}

                  {landlordApplication.status === "REJECTED" &&
                    landlordApplication.rejectionReason && (
                      <div className="rounded-xl bg-red-500/5 p-4">
                        <p className="text-sm font-medium text-red-600 dark:text-red-400">
                          Rejection reason
                        </p>

                        <p className="mt-1 text-sm leading-6 text-muted-foreground">
                          {landlordApplication.rejectionReason}
                        </p>
                      </div>
                    )}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default LandLordApplicationPage;
