"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const LandlordCTA = () => {
  return (
    <Button size="sm" className="h-9 rounded-full px-4">
      <Link href="/dashboard/landlord/properties/add">List Your Property</Link>
    </Button>
  );
};

export default LandlordCTA;
