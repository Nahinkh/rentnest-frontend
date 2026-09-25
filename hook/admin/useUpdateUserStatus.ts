"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { adminService } from "@/services/admin/admin.service";

export const useUpdateUserStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      userId,
      status,
    }: {
      userId: string;
      status: "ACTIVE" | "BLOCKED";
    }) => adminService.updateUserStatus(userId, { status }),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin-users"],
      });
    },
  });
};