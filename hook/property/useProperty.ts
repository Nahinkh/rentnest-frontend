"use client";
import { toast } from "@/components/ui/toast";
import { QUERY_KEYS } from "@/constants/queryKeys";
import { propertyService } from "@/services/property/property.service";
import {
  Query,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useProperty = (id: string) => {
  return useQuery({
    queryKey: QUERY_KEYS.SINGLE_PROPERTY(id),
    queryFn: () => propertyService.getPropertyById(id),
    enabled: !!id,
  });
};

export const useAddProperty = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: propertyService.addProperty,
    onSuccess: async (data) => {
      console.log(data)
      await queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.ADD_PROPERTY,
      });


      toast.add({
        title: "Success",
        description: "Property listing created successfully.",
        type: "success",
      });

      router.push("/dashboard/landlord/manage-properties");
    },
    onError: (error: any) => {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Failed to create property listing. Please try again.";

      toast.add({
        title: "Error",
        description: errorMessage,
        type: "error",
      });
    },
  });
};

export const useGetAllProperties = () => {
  return useQuery({
    queryKey: QUERY_KEYS.PROPERTIES,
    queryFn: propertyService.getProperties,
  });
};
export const useGetAllPropertiesByLandlord = () => {
  return useQuery({
    queryKey: QUERY_KEYS.PROPERTIES_BY_LANDLORD,
    queryFn: propertyService.getPropertiesByLandlord,
  });
};
