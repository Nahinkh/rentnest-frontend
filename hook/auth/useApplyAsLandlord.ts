"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authService } from "@/services/auth";
import { QUERY_KEYS } from "@/constants/queryKeys";

export const useApplyAsLandlord = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authService.applyLandlord,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.AUTH.CURRENT_USER,
      });
    },
  });
};