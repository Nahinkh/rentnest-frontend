import {
  Building,
  CreditCard,
  FileText,
  History,
  Home,
  LayoutDashboard,
  ShieldCheck,
  Star,
  Users,
  Wrench,
} from "lucide-react";

export const dashboardNav = {
  tenant: [
    {
      title: "Overview",
      href: "/dashboard/tenant",
      icon: LayoutDashboard,
    },
    {
      title: "My Properties",
      href: "/dashboard/tenant/my-properties",
      icon: Home,
    },
    {
      title: "Request History",
      href: "/dashboard/tenant/request-history",
      icon: History,
    },
    {
      title: "Reviews",
      href: "/dashboard/tenant/my-reviews",
      icon: Star,
    },
    {
      title: "Billing & Payments",
      href: "/dashboard/tenant/billing",
      icon: CreditCard,
    },
    {
      title: "Maintenance",
      href: "/dashboard/tenant/maintenance",
      icon: Wrench,
    },
  ],

  landlord: [
    {
      title: "Overview",
      href: "/dashboard/landlord",
      icon: LayoutDashboard,
    },
    {
      title: "Manage Properties",
      href: "/dashboard/landlord/manage-properties",
      icon: Home,
    },
    {
      title: "Rental Requests",
      href: "/dashboard/landlord/rental-request",
      icon: FileText,
    },
    {
      title: "Tenant Leases",
      href: "/dashboard/landlord/leases",
      icon: FileText,
    },
    {
      title: "Add Property",
      href: "/dashboard/landlord/add-property",
      icon: Home,
    },
    {
      title: "Maintenance Logs",
      href: "/dashboard/landlord/maintenance",
      icon: Wrench,
    },
  ],

  admin: [
    {
      title: "Overview",
      href: "/dashboard/admin",
      icon: LayoutDashboard,
    },
    {
      title: "User Management",
      href: "/dashboard/admin/users",
      icon: Users,
    },
    {
      title: "Platform Properties",
      href: "/dashboard/admin/properties",
      icon: Building,
    },
    {
      title: "Verifications",
      href: "/dashboard/admin/verifications",
      icon: ShieldCheck,
    },
  ],
} as const;