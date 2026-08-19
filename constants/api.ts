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
    ADD: "/landlord/properties",
    BY_LANDLORD: `/landlord/properties/landlord`,
  },
  RENTAL_REQUEST: {
    ALL: "/tenant",
    CREATE: "/rental-requests",
    CANCEL: (id: string) => `/rental-requests/${id}/cancel`,
    CURRENT: "/tenant/current-rental",
  },

  CATEGORY: {
    ALL: "/categories",
  },
};
