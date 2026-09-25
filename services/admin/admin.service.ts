import { api } from "@/lib/api";
import { API_ENDPOINTS } from "@/constants/api";
import { AdminUser } from "@/app/dashboard/admin/UsersTable";

export interface AdminDashboardStats {
  totalUsers: number;
  totalProperties: number;
  totalRentalRequests: number;
  totalPayments: number;
}
export interface AdminUsersResponse {
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
  data: AdminUser[];
}
export interface UpdateUserStatusPayload {
  status: "ACTIVE" | "BLOCKED";
}

const getDashboardStats = async (): Promise<AdminDashboardStats> => {
  return api.get<AdminDashboardStats>(API_ENDPOINTS.ADMIN.DASHBOARD_STATS);
};
const getUsers = async (
  params?: Record<string, string | number | undefined>,
): Promise<AdminUsersResponse> => {
  return api.get<AdminUsersResponse>(API_ENDPOINTS.ADMIN.USERS, {
    params,
  });
};

const updateUserStatus = async (
  userId: string,
  payload: UpdateUserStatusPayload,
) => {
  return api.patch(`${API_ENDPOINTS.ADMIN.USERS}/${userId}/status`, payload);
};

export const adminService = {
  getDashboardStats,
  getUsers,
  updateUserStatus, 
};
