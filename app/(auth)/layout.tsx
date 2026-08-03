import GuestRoute from "@/components/auth/GuestRoute";
import { House } from "lucide-react";
import Link from "next/link";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto flex min-h-screen items-center justify-center px-4 py-10">
        <div className="grid w-full max-w-6xl overflow-hidden rounded-3xl border bg-card shadow-2xl lg:grid-cols-2">
          {/* Left Side */}
          <div className="hidden flex-col justify-between bg-primary p-10 text-primary-foreground lg:flex">
            <div>
              <Link href="/" className="flex items-center gap-3">
                <div className="rounded-xl bg-white/20 p-3">
                  <House className="size-6" />
                </div>

                <div>
                  <h1 className="text-2xl font-bold">RentNest</h1>
                  <p className="text-sm opacity-80">Find Your Perfect Home</p>
                </div>
              </Link>
            </div>

            <div>
              <h2 className="mb-4 text-5xl font-bold leading-tight">
                Welcome to RentNest
              </h2>

              <p className="max-w-md text-lg opacity-90">
                Discover verified rental properties, connect with landlords, and
                manage your rentals in one place.
              </p>
            </div>

            <div className="text-sm opacity-70">
              © 2026 RentNest. All rights reserved.
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-md">
              <div className="mb-8 text-center lg:hidden">
                <Link href="/" className="inline-flex items-center gap-2">
                  <div className="rounded-lg bg-primary p-2 text-primary-foreground">
                    <House className="size-5" />
                  </div>

                  <span className="text-2xl font-bold">RentNest</span>
                </Link>
              </div>
              <GuestRoute>{children}</GuestRoute>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
