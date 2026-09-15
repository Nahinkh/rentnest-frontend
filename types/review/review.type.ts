import { IPropertyImage } from "../property";

export type ReviewStatus = "VISIBLE" | "HIDDEN";
export type PropertyStatus = "AVAILABLE" | "RENTED" |"UNAVAILABLE";

export interface ICreateReview {
    propertyId: string;
    rentalRequestId: string;
    rating: number;
    comment?: string;
}

export interface IReview {
  id: string;
  tenantId: string;
  propertyId: string;
  rentalRequestId: string;
  rating: number;
  comment: string | null;
  status: ReviewStatus;
  createdAt: string;
  updatedAt: string;

  property: {
    id: string;
    title: string;
    address: string;
    rentPrice: string | number;
    availability: PropertyStatus;
    images: IPropertyImage[];
  };
}


export interface IReviewResponse {
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };

  data: IReview[];
}