"use client";

import { useQuery } from "@tanstack/react-query";
import { adminService } from "@/services/admin/admin.service";

export const useLandlordApplications = () => {
  return useQuery({
    queryKey: ["admin-landlord-applications"],
    queryFn: adminService.getLandlordApplications,
  });
};
