import { api } from "@/lib/api";
import { API_ENDPOINTS } from "@/constants/api";

export interface AdminDashboardStats {
  totalUsers: number;
  totalProperties: number;
  totalRentalRequests: number;
  totalPayments: number;
}

const getDashboardStats = async (): Promise<AdminDashboardStats> => {
  return api.get<AdminDashboardStats>(
    API_ENDPOINTS.ADMIN.DASHBOARD_STATS,
  );
};

export const adminService = {
  getDashboardStats,
};  