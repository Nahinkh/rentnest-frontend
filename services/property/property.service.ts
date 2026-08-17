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
    addProperty(data:IProperty){
         const formData = new FormData();
         console.log(data)

    formData.append("title", data.title);
    formData.append("description", data.description);

    formData.append(
      "rentPrice",
      String(data.rentPrice)
    );

    formData.append(
      "bedrooms",
      String(data.bedrooms)
    );

    formData.append(
      "bathrooms",
      String(data.bathrooms)
    );

    if (data.area !== undefined) {
      formData.append(
        "area",
        String(data.area)
      );
    }

    formData.append("address", data.address);
    formData.append("city", data.city);
    formData.append("division", data.division);

    if (data.latitude !== undefined) {
      formData.append(
        "latitude",
        String(data.latitude)
      );
    }

    if (data.longitude !== undefined) {
      formData.append(
        "longitude",
        String(data.longitude)
      );
    }

    formData.append(
      "category",
      String(data.category)
    );

    // Multiple images
    data.images.forEach((file) => {
      formData.append("images", file);
    });

    return api.post<IProperty>(
      API_ENDPOINTS.PROPERTY.ADD,
      formData
    );
  },
    getPropertiesByLandlord(){
        return api.get<IProperty[]>(API_ENDPOINTS.PROPERTY.BY_LANDLORD)
    }
}