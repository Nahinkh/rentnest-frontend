"use client";

import { rentalRequestService } from "@/services/tenant/tenant.service";
import { useQuery } from "@tanstack/react-query";

export const useGetMyRentalRequests = () => {
  return useQuery({
    queryKey: ["rental-requests", "me"],
    queryFn: rentalRequestService.getMyRequests,
  });
};

export const useCurrentRental = () => {
  return useQuery({
    queryKey: ["tenant", "current-rental"],
    queryFn: rentalRequestService.getCurrentRental,
  });
};