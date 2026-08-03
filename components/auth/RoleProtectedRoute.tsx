"use client";
import { useProfile } from "@/hook/auth/userProfile";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
interface RoleProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles: ("admin" | "landlord" | "tenant")[];
}
const RoleProtectedRoute = ({
  children,
  allowedRoles,
}: RoleProtectedRouteProps) => {
  const router = useRouter();
  const { data: user, isPending } = useProfile();
  useEffect(() => {
    if (isPending && !user) {
      router.push("/login");
    }
  }, [user, isPending, router]);
  if (isPending) {
    return <div>Loading...</div>;
  }

  const normalizedRole = user?.role?.toLowerCase() as
    | (typeof allowedRoles)[number]
    | undefined;

    console.log(normalizedRole)

  if (!user || !normalizedRole || !allowedRoles.includes(normalizedRole)) {
    router.push("/login");
    return null;
  }
  return <>{children}</>;
};

export default RoleProtectedRoute;
