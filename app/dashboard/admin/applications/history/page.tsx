"use client";
import { useLandlordApplicationHistory } from "@/hook/admin/useLandlordApplicationHistory";
import GlobalError from "@/components/common/GlobalError";
import GlobalLoader from "@/components/common/GlobalLoader";
import RoleProtectedRoute from "@/components/auth/RoleProtectedRoute";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import React from "react";
import LandlordApplicationHistoryCard from "@/components/dashboard/admin/LandlordApplicationHistoryCard";

const HistoryPage = () => {
  const {
    data: applications,
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useLandlordApplicationHistory();

  if (isLoading) {
    return <GlobalLoader />;
  }

  if (isError) {
    return (
      <GlobalError
        message="Failed to load application history. Please try again."
        onRetry={() => refetch()}
      />
    );
  }

  return (
    <RoleProtectedRoute allowedRoles={["admin"]}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              Application History
            </h1>

            <p className="mt-1 text-sm text-muted-foreground">
              Review previously approved and rejected landlord applications.
            </p>
          </div>

          <Button
            variant="outline"
            className="rounded-xl"
            onClick={() => refetch()}
            disabled={isFetching}
          >
            <RefreshCw
              className={`mr-2 size-4 ${isFetching ? "animate-spin" : ""}`}
            />
            Refresh
          </Button>
        </div>

        {/* Summary */}
        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <span>
            {applications?.length ?? 0} reviewed{" "}
            {applications?.length === 1 ? "application" : "applications"}
          </span>
        </div>

        {/* Empty State */}
        {!applications?.length ? (
          <div className="rounded-2xl border border-dashed p-10 text-center">
            <h2 className="font-semibold">No application history</h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Approved and rejected landlord applications will appear here.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {applications.map((application) => (
              <LandlordApplicationHistoryCard
                key={application.id}
                application={application}
              />
            ))}
          </div>
        )}
      </div>
    </RoleProtectedRoute>
  );
};

export default HistoryPage;
