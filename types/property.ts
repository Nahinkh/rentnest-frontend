export interface ICategory {
  id: string;
  name: string;
  slug: string;
  description: string;
}

export interface ILandlord {
  name: string;
  email: string;
}

export interface IProperty {
  id: string;
  title: string;
  description: string;

  rentPrice: string;

  bedrooms: number;
  bathrooms: number;
  area: number;

  address: string;
  city: string;
  division: string;

  latitude: number;
  longitude: number;

  availability: "AVAILABLE" | "RENTED";

  landlordId: string;
  categoryId: string;

  createdAt: string;
  updatedAt: string;

  category: ICategory;
  landlord: ILandlord;

  images: string[];
}