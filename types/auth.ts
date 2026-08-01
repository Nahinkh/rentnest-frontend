export type UserRole = "TENANT" | "LANDLORD" | "ADMIN";

export type UserStatus = "ACTIVE" | "BLOCKED";

export interface iUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
}

export interface iLogin {
  email: string;
  password: string;
}

export interface iRegister {
  name: string;
  email: string;
  password: string;
  role: Exclude<UserRole, "ADMIN">;
}

export interface QUERY_KEYS {
  CURRENT_USER: ["current-user"];
  PROPERTIES: ["properties"];
  PROPERTY: ["property"];
  CATEGORIES: ["categories"];
  RENTALS: ["rentals"];
  REVIEWS: ["reviews"];
}
