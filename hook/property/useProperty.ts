"use client"

import { QUERY_KEYS } from "@/constants/queryKeys"
import { propertyService } from "@/services/property/property.service"
import { Query, useQuery } from "@tanstack/react-query"

export const useProperty = (id: string) => {
    return useQuery({
        queryKey: QUERY_KEYS.SINGLE_PROPERTY(id),
        queryFn:()=> propertyService.getPropertyById(id),
        enabled:!!id,

    })
}