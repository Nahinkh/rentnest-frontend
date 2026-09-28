"use client";
import { Button } from "@/components/ui/button";
import { useProfile } from "@/hook/auth/userProfile";
import { isProfileComplete } from "@/utils/profile";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const LandlordCTA = () => {
  const router = useRouter();

  const { data: user, isLoading } = useProfile();
  // console.log(user);
  const handleClick = () => {
    if (!user) {
      router.push("/login");
      return;
    }

    // Only existing landlords can directly add a property
    if (user.role === "LANDLORD") {
      router.push("/dashboard/landlord/properties/add");
      return;
    }

    // Tenant must complete profile first
    if (!isProfileComplete(user)) {
      router.push("/profile");
      return;
    }

    // Completed tenant → landlord application
    router.push("/dashboard/tenant/apply-landlord");
  };
  return (
    <Button size="sm" className="h-9 rounded-full px-4" onClick={handleClick}>
      <Link href="/dashboard/landlord/properties/add">List Your Property</Link>
    </Button>
  );
};

export default LandlordCTA;
