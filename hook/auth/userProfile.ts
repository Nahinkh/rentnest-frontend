import { QUERY_KEYS } from "@/constants/queryKeys"
import { authService } from "@/services/auth"
import { useQuery } from "@tanstack/react-query"

export const useProfile = () => {
    return useQuery({
        queryKey: QUERY_KEYS.AUTH.CURRENT_USER,
        queryFn: authService.getCurrentUser
    })
}