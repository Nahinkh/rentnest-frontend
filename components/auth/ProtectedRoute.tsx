"use client";
import { useProfile } from "@/hook/auth/userProfile";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
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
  if (!user) {
    router.push("/login");
    return null;
  }
  return children;
};

export default ProtectedRoute;
