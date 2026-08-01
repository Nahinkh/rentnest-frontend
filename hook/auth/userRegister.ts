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

export const userRegister = () => {
  return useMutation({
    mutationFn: authService.registerUser,
    onSuccess:  () => {
      toast.add({
        title: "Registration Successful",
        description: "You have successfully registered",
        type: "success",
      });
    },
    onError: (error: ApiError) => {
      toast.add({
        title: "Registration Failed",
        description:
          error.response?.data?.message || "An error occurred during registration",
        type: "error",
      });
    },
  });
};
