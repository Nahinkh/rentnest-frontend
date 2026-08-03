import { API_ENDPOINTS } from "@/constants/api"
import { api } from "@/lib/api"
import { IProperty } from "@/types/property"

export const propertyService = {
    getProperties(){
        return api.get<IProperty[]>(API_ENDPOINTS.PROPERTY.ALL)
    },
    getPropertyById(id: string){
        return api.get<IProperty>(API_ENDPOINTS.PROPERTY.SINGLE(id))
    },
    addProperty(){
        return api.post<IProperty>(API_ENDPOINTS.PROPERTY.ADD)
    }
}