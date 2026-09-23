export interface HeroSlide {
  id: string;
  image: string;
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: "find-home",
    image: "https://images.unsplash.com/photo-1630347254189-468465d1f99b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    eyebrow: "FIND YOUR NEXT HOME",
    title: "A place that feels like home.",
    description:
      "Discover rental homes and apartments in locations that fit your lifestyle.",
    ctaLabel: "Explore Properties",
    ctaHref: "/properties",
  },
  {
    id: "find-space",
    image: "https://images.unsplash.com/photo-1613575831056-0acd5da8f085?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    eyebrow: "FIND YOUR SPACE",
    title: "More space for what matters.",
    description:
      "Explore comfortable homes for families, professionals, and students.",
    ctaLabel: "Browse Homes",
    ctaHref: "/properties",
  },
  {
    id: "live-location",
    image: "https://images.unsplash.com/photo-1628592102751-ba83b0314276?q=80&w=1097&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    eyebrow: "LIVE WHERE YOU WANT",
    title: "Find your place in the right neighborhood.",
    description:
      "Search rental properties by location, property type, and budget.",
    ctaLabel: "Explore Locations",
    ctaHref: "/properties",
  },
  {
    id: "list-property",
    image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    eyebrow: "FOR PROPERTY OWNERS",
    title: "Have a property to rent?",
    description:
      "List your property on RentNest and connect with potential tenants.",
    ctaLabel: "List Your Property",
    ctaHref: "/dashboard/landlord/properties/add",
  },
];