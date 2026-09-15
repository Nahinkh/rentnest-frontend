import { reviewService } from "@/services/review/reviews";
import { useQuery } from "@tanstack/react-query";

export const useGetMyReviews = (
  page = 1,
  limit = 10,
) => {
  return useQuery({
    queryKey: [
      "reviews",
      "my-reviews",
      page,
      limit,
    ],
    queryFn: () =>
      reviewService.getMyReviews(
        page,
        limit,
      ),
  });
};