export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    PROFILE: "/auth/profile",
    LOGOUT: "/auth/logout",
    REFRESH: "/auth/refresh-token",
  },

  PROPERTY: {
    ALL: "/landlord/properties",
    SINGLE: (id: string) => `/landlord/properties/${id}`,
  },

  CATEGORY: {
    ALL: "/categories",
  },
};