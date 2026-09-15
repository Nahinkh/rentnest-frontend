"use client";
import React, { useMemo } from "react";
import DashboardHeader from "../../common/DashboardHeader";
import { Star } from "lucide-react";
import DashboardEmptyState from "../../common/DashboardEmptyState";
import DashboardErrorState from "../../common/DashboardErrorState";
import DashboardLoadingState from "../../common/DashboardLoadingState";
import { useGetMyReviews } from "@/hook/review/useReview";
import TenantReviewCard from "@/components/review/TenantReviewCard";

const MyReviewsPage = () => {
  const { data, isLoading, isError } = useGetMyReviews();
  const reviews = data?.data ?? [];
  const meta = data?.meta;

//   const eligibleRequests = useMemo(() => {
//     return rentalRequests.filter(
//       (request) =>
//         request.status === "APPROVED" && request.payment?.status === "SUCCESS",
//     );
//   }, [rentalRequests]);

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
            title="Reviews"
            description="Share your experience and help other tenants make better rental decisions."
          />

          {/* Intro */}
          <div className="rounded-2xl border border-border/60 bg-secondary/20 p-4 sm:p-5">
            <div className="flex items-start gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Star className="size-4 text-primary" />
              </div>

              <div>
                <h2 className="text-sm font-semibold">
                  Your rental experience matters
                </h2>

                <p className="mt-1 max-w-2xl text-xs leading-relaxed text-muted-foreground">
                  Leave an honest review about properties you've rented. Your
                  feedback can help future tenants choose the right property.
                </p>
              </div>
            </div>
          </div>

          {/* Properties */}
          <section className="space-y-4">
            <div>
              <h2 className="text-base font-semibold tracking-tight">
                Your Rental Experiences
              </h2>

              <p className="mt-1 text-xs text-muted-foreground">
                Review properties associated with your completed rental
                requests.
              </p>
            </div>

            {reviews.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                {reviews.map((review) => (
                  <TenantReviewCard
                    key={review.id}
                    review={review}
                    onEdit={() => {}}
                    onDelete={() => {}}
                  />
                ))}
              </div>
            ) : (
              <DashboardEmptyState hasSearch={false} onClear={() => {}} />
            )}
          </section>
        </main>
      </div>
    </div>
  );
};

export default MyReviewsPage;
