import React from "react";
import { Card, CardContent } from "../ui/card";
import { Star } from "lucide-react";
import { Button } from "../ui/button";
import { IReview } from "@/types/review/review.type";
import ReviewStatusBadge from "./ReviewStatusBadge";
interface TenantReviewCardProps {
  review: IReview;
  onEdit: (review: IReview) => void;
  onDelete: (review: IReview) => void;
}
const TenantReviewCard = ({
  review,
  onEdit,
  onDelete,
}: TenantReviewCardProps) => {
  const image =
    review.property.images?.[0]?.imageUrl ?? "/images/property-placeholder.jpg";
  return (
    <Card className="overflow-hidden border-border/60 shadow-sm">
      <CardContent className="p-4 sm:p-5">
        <div className="flex flex-col gap-4 sm:flex-row">
          {/* Property Image */}
          <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-xl bg-muted sm:size-32">
            <img
              src={image}
              alt={review.property.title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="min-w-0 flex-1">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <h3 className="line-clamp-1 text-sm font-semibold">
                  {review.property.title}
                </h3>

                <p className="mt-1 truncate text-[11px] text-muted-foreground">
                  {review.property.address}
                </p>
              </div>

              <ReviewStatusBadge status={review.status} />
            </div>

            {/* Rating */}
            <div className="mt-3 flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className={[
                      "size-3.5",
                      index < review.rating
                        ? "fill-yellow-500 text-yellow-500"
                        : "text-muted-foreground/25",
                    ].join(" ")}
                  />
                ))}
              </div>

              <span className="text-xs font-semibold">{review.rating}.0</span>
            </div>

            {/* Comment */}
            {review.comment && (
              <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                "{review.comment}"
              </p>
            )}

            {/* Footer */}
            <div className="mt-4 flex flex-col gap-3 border-t border-border/40 pt-3 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-[10px] text-muted-foreground">
                {new Date(review.createdAt).toLocaleDateString("en-BD", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </span>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 px-3 text-xs"
                  onClick={() => onEdit(review)}
                >
                  Edit
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 border-destructive/30 px-3 text-xs text-destructive hover:bg-destructive/10 hover:text-destructive"
                  onClick={() => onDelete(review)}
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TenantReviewCard;
