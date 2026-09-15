import { API_ENDPOINTS } from "@/constants/api";
import { api } from "@/lib/api";
import { ICreateReview, IReview, IReviewResponse } from "@/types/review/review.type";

export const reviewService = {
  getMyReviews(page = 1, limit = 10) {
    return api.get<IReviewResponse>(
      `${API_ENDPOINTS.REVIEW.BY_TENANT}?page=${page}&limit=${limit}`,
    );
  },

  createReview(data: ICreateReview) {
    return api.post<IReview>(
      API_ENDPOINTS.REVIEW.CREATE,
      data,
    );
  },

//   updateReview(
//     id: string,
//     data: Partial<ICreateReview>,
//   ) {
//     return api.patch<IReview>(
//       API_ENDPOINTS.REVIEW.UPDATE(id),
//       data,
//     );
//   },

//   deleteReview(id: string) {
//     return api.delete(
//       API_ENDPOINTS.REVIEW.DELETE(id),
//     );
//   },
};