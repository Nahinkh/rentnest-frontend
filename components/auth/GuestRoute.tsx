"use client";
import { useProfile } from '@/hook/auth/userProfile';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const GuestRoute = ({ children }: { children: React.ReactNode}) => {
  const router = useRouter();
  const { data: user, isPending } = useProfile();
  useEffect(() => {
    if (!isPending && user) {
      router.push("/");
    }
  }, [user, isPending, router]);
  if (isPending) {
    return null;
  }
  if (user) {
    return null;
  }
  return children;
};

export default GuestRoute