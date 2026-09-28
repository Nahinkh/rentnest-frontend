export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    PROFILE: "/auth/profile",
    LOGOUT: "/auth/logout",
    REFRESH: "/auth/refresh-token",
    APPLY_LANDLORD: "/auth/apply-landlord",
  },
  ADMIN: {
    DASHBOARD_STATS: "/admin/dashboard-stats",
    USERS: "/admin/users",
    LANDLORD_APPLICATIONS: "/admin/landlord-applications",
    LANDLORD_APPLICATION_HISTORY: "/admin/landlord-applications/history",
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
  REVIEW: {
    ALL: "/reviews",
    CREATE: "/reviews",
    BY_PROPERTY: (propertyId: string) => `/reviews/property/${propertyId}`,
    BY_TENANT: (tenantId: string) => `/reviews/my-reviews/${tenantId}`,
  },
};
