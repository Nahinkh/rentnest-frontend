"use client";

import { toast } from "@/components/ui/toast";
import { QUERY_KEYS } from "@/constants/queryKeys";
import { authService } from "@/services/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
interface ApiError {
  success: boolean;
  message: string;
  response?: {
    data?: {
      message?: string;
    };
  };
}

export const userLogout = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: authService.logoutUser,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.AUTH.CURRENT_USER,
      });
      toast.add({
        title: "Logout Successful",
        description: "You have successfully logged out",
        type: "success",
      });
    },
    onError: (error: ApiError) => {
      toast.add({
        title: "Logout Failed",
        description:
          error.response?.data?.message || "An error occurred during logout",
        type: "error",
      });
    },
  });
};
