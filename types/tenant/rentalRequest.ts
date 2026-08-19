import { IProperty } from "../property";

export interface RequestStatusBadgeProps {
  status: "PENDING" | "APPROVED" | "REJECTED" | "CANCELLED";
}
export interface IRentalRequest {
  id: string;

  tenantId: string;
  propertyId: string;

  status: RequestStatusBadgeProps["status"];

  startDate: string;
  durationMonth: number;
  message?: string | null;

  createdAt: string;
  updatedAt: string;

  property: IProperty;
}
