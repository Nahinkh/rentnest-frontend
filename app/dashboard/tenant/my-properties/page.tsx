"use client"
import { useCurrentRental, useGetMyRentalRequests } from '@/hook/tenant/useTenant';
import React from 'react'
import DashboardLoadingState from '../../common/DashboardLoadingState';
import DashboardErrorState from '../../common/DashboardErrorState';
import DashboardHeader from '../../common/DashboardHeader';
import { Search } from 'lucide-react';
import CurrentPropertyCard from '@/components/tenant/CurrentPropertyCard';
import RentalPropertyCard from '@/components/tenant/RentalPropertyCard';
import EmptyPropertyState from '@/components/tenant/EmptyPropertyState';

const MyPropertiesPage = () => {
    const {
    data: rentalRequests = [],
    isLoading: requestsLoading,
    isError: requestsError,
  } = useGetMyRentalRequests();

  const {
    data: currentRental,
    isLoading: currentRentalLoading,
    isError: currentRentalError,
  } = useCurrentRental();

  const isLoading =
    requestsLoading || currentRentalLoading;

  const isError =
    requestsError || currentRentalError;

  if (isLoading) {
    return <DashboardLoadingState />;
  }

  if (isError) {
    return <DashboardErrorState />;
  }

  const pendingRequests = rentalRequests.filter(
    (request) => request.status === "PENDING",
  );

  const previousRequests = rentalRequests.filter(
    (request) =>
      request.status === "REJECTED" ||
      request.status === "CANCELLED",
  );
  return (
     <div className="h-full w-full overflow-hidden bg-background">
      <div className="h-full overflow-y-auto">
        <main className="mx-auto w-full max-w-7xl space-y-6 px-4 py-6 sm:px-6 lg:px-8">

          {/* Header */}
          <DashboardHeader
            title="My Properties"
            description="Manage your current rental and track properties you've requested."
            action={{
              label: "Browse Properties",
              href: "/properties",
              icon: <Search className="size-3.5" />,
            }}
          />

          {/* Current Rental */}
          {currentRental && (
            <section>
              <CurrentPropertyCard rental={currentRental} />
            </section>
          )}

          {/* Pending Requests */}
          <section className="space-y-4">
            <div>
              <h2 className="text-base font-semibold tracking-tight">
                Pending Requests
              </h2>

              <p className="mt-1 text-xs text-muted-foreground">
                Properties waiting for landlord approval.
              </p>
            </div>

            {pendingRequests.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                {pendingRequests.map((request) => (
                  <RentalPropertyCard
                    key={request.id}
                    request={request}
                  />
                ))}
              </div>
            ) : (
              <EmptyPropertyState
                title="No pending requests"
                description="You don't have any rental requests waiting for approval."
              />
            )}
          </section>

          {/* Previous Requests */}
          {previousRequests.length > 0 && (
            <section className="space-y-4 pb-6">
              <div>
                <h2 className="text-base font-semibold tracking-tight">
                  Previous Requests
                </h2>

                <p className="mt-1 text-xs text-muted-foreground">
                  Your rejected or cancelled rental requests.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                {previousRequests.map((request) => (
                  <RentalPropertyCard
                    key={request.id}
                    request={request}
                  />
                ))}
              </div>
            </section>
          )}

        </main>
      </div>
    </div>
  )
}

export default MyPropertiesPage