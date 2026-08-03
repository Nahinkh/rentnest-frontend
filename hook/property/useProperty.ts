"use client"

import { toast } from "@/components/ui/toast"
import { QUERY_KEYS } from "@/constants/queryKeys"
import { propertyService } from "@/services/property/property.service"
import { Query, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation"

export const useProperty = (id: string) => {
    return useQuery({
        queryKey: QUERY_KEYS.SINGLE_PROPERTY(id),
        queryFn:()=> propertyService.getPropertyById(id),
        enabled:!!id,

    })
}

export const useAddProperty = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn:propertyService.addProperty,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.PROPERTIES,
      });

      toast.add({
        title: "Success",
        description: "Property listing created successfully.",
        type: "success",
      });

      router.push("/dashboard/landlord/properties");
    },
    onError: (error: any) => {
      const errorMessage = error.response?.data?.message || "Failed to create property listing. Please try again.";
      
      toast.add({
        title: "Error",
        description: errorMessage,
        type: "error",
      });
      
      console.error("Property creation error:", errorMessage);
    },
  });
};