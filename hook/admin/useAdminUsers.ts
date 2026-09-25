"use client";

import { useQuery } from "@tanstack/react-query";

import { adminService } from "@/services/admin/admin.service";

interface UseAdminUsersParams {
  searchTerm?: string;
  role?: string;
  status?: string;
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export const useAdminUsers = ({
  searchTerm,
  role,
  status,
  page = 1,
  limit = 10,
  sortBy = "createdAt",
  sortOrder = "desc",
}: UseAdminUsersParams = {}) => {
  return useQuery({
    queryKey: [
      "admin-users",
      searchTerm,
      role,
      status,
      page,
      limit,
      sortBy,
      sortOrder,
    ],

    queryFn: () =>
      adminService.getUsers({
        searchTerm: searchTerm || undefined,
        role: role && role !== "all" ? role : undefined,
        status: status && status !== "all" ? status : undefined,
        page,
        limit,
        sortBy,
        sortOrder,
      }),

    placeholderData: (previousData) => previousData,
  });
};
