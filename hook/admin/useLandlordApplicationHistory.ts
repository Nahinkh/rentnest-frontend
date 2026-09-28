"use client";

import { useQuery } from "@tanstack/react-query";
import { adminService } from "@/services/admin/admin.service";

export const useLandlordApplicationHistory = () => {
  return useQuery({
    queryKey: ["admin-landlord-application-history"],
    queryFn: adminService.getLandlordApplicationHistory,
  });
};
