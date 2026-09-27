"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { adminService } from "@/services/admin/admin.service";
import { toast } from "@/components/ui/toast";

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

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["admin-users"],
      });

      toast.add({
        title:
          variables.status === "BLOCKED"
            ? "User blocked successfully."
            : "User activated successfully.",
      });
    },

    onError: () => {
      toast.add({
        title: "Failed to update user status.",
        description: "Please try again."
      });
    },
  });
};