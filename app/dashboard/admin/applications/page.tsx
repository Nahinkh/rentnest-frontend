"use client";
import RoleProtectedRoute from "@/components/auth/RoleProtectedRoute";
import GlobalError from "@/components/common/GlobalError";
import GlobalLoader from "@/components/common/GlobalLoader";
import { Button } from "@/components/ui/button";
import { useLandlordApplications } from "@/hook/admin/useLandlordApplications";
import { RefreshCw } from "lucide-react";
import React from "react";

const ApplicationPage = () => {
  const {
    data: applications = [],
    isLoading,
    isError,
    refetch,
  } = useLandlordApplications();
  if (isLoading) {
    return <GlobalLoader message="Loading landlord applications..." />;
  }

  if (isError) {
    return (
      <GlobalError
        message="Failed to load landlord applications."
        onRetry={refetch}
      />
    );
  }
  return (
    <RoleProtectedRoute allowedRoles={["admin"]}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-primary">Verification</p>

            <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
              Landlord Applications
            </h1>

            <p className="mt-2 text-sm text-muted-foreground">
              Review users who want to become RentNest landlords.
            </p>
          </div>

          <Button
            variant="outline"
            className="w-fit rounded-xl"
            onClick={() => refetch()}
          >
            <RefreshCw className="mr-2 size-4" />
            Refresh
          </Button>
        </div>

        {/* Summary */}
        <div className="rounded-2xl border border-border/60 bg-card p-4">
          <p className="text-sm text-muted-foreground">Pending applications</p>

          <p className="mt-1 text-2xl font-bold">{applications.length}</p>
        </div>

        {/* Empty state */}
        {applications.length === 0 && (
          <div className="rounded-2xl border border-dashed border-border/70 py-16 text-center">
            <h2 className="text-lg font-semibold">No pending applications</h2>

            <p className="mt-1 text-sm text-muted-foreground">
              There are no landlord applications waiting for review.
            </p>
          </div>
        )}

        {/* Applications */}
        {applications.length > 0 && (
          <div className="grid gap-4">
            {applications.map((application) => (
              <div
                key={application.id}
                className="rounded-2xl border border-border/60 bg-card p-5"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h2 className="font-semibold">{application.user.name}</h2>

                    <p className="mt-1 text-sm text-muted-foreground">
                      {application.user.email}
                    </p>

                    <p className="mt-1 text-sm text-muted-foreground">
                      Applied{" "}
                      {new Date(application.createdAt).toLocaleDateString(
                        "en-BD",
                      )}
                    </p>
                  </div>

                  <span className="w-fit rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-600 dark:text-yellow-400">
                    Pending
                  </span>
                </div>

                <div className="mt-4 border-t pt-4">
                  <p className="text-sm font-medium">Application reason</p>

                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {application.reason || "No reason provided."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </RoleProtectedRoute>
  );
};

export default ApplicationPage;
