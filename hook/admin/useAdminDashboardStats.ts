"use client";

import { useQuery } from "@tanstack/react-query";

import { adminService } from "@/services/admin/admin.service";

export const useAdminDashboardStats = () => {
  return useQuery({
    queryKey: ["admin-dashboard-stats"],
    queryFn: adminService.getDashboardStats,
  });
};