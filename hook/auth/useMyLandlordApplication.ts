"use client";

import { useQuery } from "@tanstack/react-query";
import { authService } from "@/services/auth";

export const useMyLandlordApplication = () => {
  return useQuery({
    queryKey: ["my-landlord-application"],
    queryFn: authService.getMyLandlordApplication,
  });
};
