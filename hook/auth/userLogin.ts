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

export const userLogin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: authService.loginUser,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.AUTH.CURRENT_USER,
      });
      toast.add({
        title: "Login Successful",
        description: "You have successfully logged in",
        type: "success",
      });
    },
    onError: (error: ApiError) => {
      toast.add({
        title: "Login Failed",
        description:
          error.response?.data?.message || "An error occurred during login",
        type: "error",
      });
    },
  });
};
