"use client"
import React, { useMemo, useState } from 'react'
import DashboardHeader from '../../common/DashboardHeader'
import { Search } from 'lucide-react'
import DashboardLoadingState from '../../common/DashboardLoadingState'
import DashboardErrorState from '../../common/DashboardErrorState'
import { useGetMyRentalRequests } from '@/hook/tenant/useTenant'
import { RequestFilter } from '@/types/tenant/rentalRequest'
import RequestHistoryFilters from '@/components/tenant/RequestHistoryFilters'
import RequestHistoryList from '@/components/tenant/RequestHistoryList'

const RequestHistoryPage = () => {
     const {
    data: rentalRequests = [],
    isLoading,
    isError,
  } = useGetMyRentalRequests();
    const [filter, setFilter] =
    useState<RequestFilter>("ALL");

  const filteredRequests = useMemo(() => {
    if (filter === "ALL") {
      return rentalRequests;
    }

    return rentalRequests.filter(
      (request) => request.status === filter,
    );
  }, [rentalRequests, filter]);

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
          {/* Header */}
          <DashboardHeader
            title="Request History"
            description="Track all your rental requests, their current status, and property details."
            action={{
              label: "Browse Properties",
              href: "/properties",
              icon: <Search className="size-3.5" />,
            }}
          />

          {/* Filter */}
          <RequestHistoryFilters
            value={filter}
            onChange={setFilter}
            requests={rentalRequests}
          />

          {/* Requests */}
          {filteredRequests.length > 0 ? (
            <RequestHistoryList
              requests={filteredRequests}
            />
          ) : (
            <div className="rounded-xl border border-border bg-card p-8 text-center">
              <h3 className="text-lg font-semibold text-foreground">
                {filter === "ALL"
                  ? "No rental requests yet"
                  : `No ${filter.toLowerCase()} requests`}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {filter === "ALL"
                  ? "You haven't submitted any rental requests yet."
                  : `You don't have any ${filter.toLowerCase()} rental requests.`}
              </p>
              <a
                href="/properties"
                className="mt-4 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                Browse Properties
              </a>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default RequestHistoryPage