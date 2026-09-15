"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useProfile } from "@/hook/auth/userProfile";
import { Heart, LayoutDashboard, LogOut, Menu, User } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { Input } from "@/components/ui/input";
import NavbarLogo from "./NavbarLogo";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show navbar near the top
      if (currentScrollY < 20) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
     <nav
      className={`fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-md transition-transform duration-300 md:hidden ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex h-16 items-center gap-2 px-3">
        <NavbarLogo />
        {/* Search */}
        <div className="min-w-0 flex-1">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search rentals..."
              className="h-9 w-full rounded-full border-border/60 bg-muted/50 px-4 text-sm focus-visible:bg-background"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex shrink-0 items-center gap-0.5">
          {/* Wishlist */}
          <Button
       
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-full"
          >
            <Link href="/wishlist" aria-label="Wishlist">
              <Heart className="h-4 w-4" />
            </Link>
          </Button>

          {/* Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[300px] sm:w-[350px]"
            >
              <SheetHeader className="border-b border-border/40 pb-4">
                <SheetTitle>RentNest</SheetTitle>
              </SheetHeader>

              <div className="py-5">
                <nav className="flex flex-col gap-1">
                  <Link
                    href="/properties"
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg px-3 py-3 text-sm font-medium hover:bg-muted"
                  >
                    Browse Properties
                  </Link>

                  <Link
                    href="/dashboard/tenant"
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg px-3 py-3 text-sm font-medium hover:bg-muted"
                  >
                    Tenant Portal
                  </Link>

                  <Link
                    href="/dashboard/landlord"
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg px-3 py-3 text-sm font-medium hover:bg-muted"
                  >
                    Landlord Portal
                  </Link>

                  <Link
                    href="/wishlist"
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg px-3 py-3 text-sm font-medium hover:bg-muted"
                  >
                    Wishlist
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
