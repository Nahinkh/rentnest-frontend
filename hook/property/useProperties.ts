"use client"

import { QUERY_KEYS } from "@/constants/queryKeys"
import { propertyService } from "@/services/property/property.service"
import { Query, useQuery } from "@tanstack/react-query"

export const useProperties = () => {
    return useQuery({
        queryKey: QUERY_KEYS.PROPERTIES,
        queryFn: propertyService.getProperties
    })
}