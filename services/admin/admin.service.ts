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
export interface LandlordApplicationUser {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  avatarUrl?: string | null;
  division?: string | null;
  district?: string | null;
  city?: string | null;
  address?: string | null;
}

export interface LandlordApplication {
  id: string;
  userId: string;
  reason?: string | null;
  additionalInfo?: string | null;
  status: "PENDING" | "APPROVED" | "REJECTED";
  reviewedById?: string | null;
  reviewedAt?: string | null;
  rejectionReason?: string | null;
  createdAt: string;
  updatedAt: string;
  user: LandlordApplicationUser;
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

const getLandlordApplications = async (): Promise<LandlordApplication[]> => {
  return api.get<LandlordApplication[]>(
    API_ENDPOINTS.ADMIN.LANDLORD_APPLICATIONS,
  );
};

export const adminService = {
  getDashboardStats,
  getUsers,
  updateUserStatus,
  getLandlordApplications,
};
