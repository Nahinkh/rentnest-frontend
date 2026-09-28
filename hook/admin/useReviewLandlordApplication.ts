"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { adminService } from "@/services/admin/admin.service";

export const useReviewLandlordApplication = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      applicationId,
      status,
      rejectionReason,
    }: {
      applicationId: string;
      status: "APPROVED" | "REJECTED";
      rejectionReason?: string;
    }) =>
      adminService.reviewLandlordApplication(applicationId, {
        status,
        rejectionReason,
      }),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin-landlord-applications"],
      });
    },
  });
};
