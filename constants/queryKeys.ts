export const QUERY_KEYS = {
    AUTH:{
        CURRENT_USER: ["current-user"] as const,
    },
    PROPERTIES: ["properties"] as const,
    ADD_PROPERTY: ["add-property"] as const,
    SINGLE_PROPERTY: (id: string) => ["property", id] as const,
    CATEGORIES: ["categories"] as const,
    RENTALS: {
        MY_RENTAL_REQUESTS: ["my-rental-requests"] as const,
        LAND_LORD_RENTAL_REQUESTS: ["landlord-rental-requests"] as const,
    },
    PROPERTIES_BY_LANDLORD: ["properties-by-landlord"] as const,
    PAYMENT: {
        HISTORY: ["payment-history"] as const,
    },
    REVIEWS: {
        ALL: ["reviews"] as const,
    },
}

