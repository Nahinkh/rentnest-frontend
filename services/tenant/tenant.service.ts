import { API_ENDPOINTS } from "@/constants/api";
import { api } from "@/lib/api";
import { IRentalRequest } from "@/types/tenant/rentalRequest";

export const rentalRequestService = {
  getMyRequests() {
    return api.get<IRentalRequest[]>(
      API_ENDPOINTS.RENTAL_REQUEST.ALL,
    );
  },
  getCurrentRental() {
    return api.get<IRentalRequest | null>(
      API_ENDPOINTS.RENTAL_REQUEST.CURRENT,
    );
  },
};