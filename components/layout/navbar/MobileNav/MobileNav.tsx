"use client";
import React, { useState } from "react";
import NavbarLogo from "../NavbarLogo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Heart, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ThemeSwitcher from "../ThemeSwitcher";
import UserMenu from "../UserMenu";
import NavbarSearch from "../NavbarSearch";
import MobilePropertyFilterBar from "@/components/property/MobilePropertyFilterBar";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex w-full flex-col">
      <MobilePropertyFilterBar />
      {/* Top Row */}
      <div className="flex h-14 items-center gap-2">
        {/* Logo */}
        <NavbarLogo />

        {/* Right Actions */}
        <div className="ml-auto flex items-center gap-1">
          {/* Wishlist */}
          <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
            <Link href="/wishlist" aria-label="Saved properties">
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
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[300px] overflow-y-auto sm:w-[350px]"
            >
              <SheetHeader className="border-b border-border/40 pb-4 text-left">
                <SheetTitle>RentNest</SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-6 py-5">
                {/* Main Navigation */}
                <nav className="flex flex-col gap-1">
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-muted"
                  >
                    Home
                  </Link>

                  {/* Properties */}
                  <div className="px-3 py-2">
                    <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Properties
                    </p>

                    <div className="flex flex-col">
                      <Link
                        href="/properties"
                        onClick={() => setIsOpen(false)}
                        className="rounded-md px-2 py-2 text-sm hover:bg-muted"
                      >
                        All Properties
                      </Link>

                      <Link
                        href="/properties?division=dhaka"
                        onClick={() => setIsOpen(false)}
                        className="rounded-md px-2 py-2 text-sm hover:bg-muted"
                      >
                        Dhaka
                      </Link>

                      <Link
                        href="/properties?division=chattogram"
                        onClick={() => setIsOpen(false)}
                        className="rounded-md px-2 py-2 text-sm hover:bg-muted"
                      >
                        Chattogram
                      </Link>

                      <Link
                        href="/properties?division=rajshahi"
                        onClick={() => setIsOpen(false)}
                        className="rounded-md px-2 py-2 text-sm hover:bg-muted"
                      >
                        Rajshahi
                      </Link>

                      <Link
                        href="/properties?division=khulna"
                        onClick={() => setIsOpen(false)}
                        className="rounded-md px-2 py-2 text-sm hover:bg-muted"
                      >
                        Khulna
                      </Link>

                      <Link
                        href="/properties?division=barishal"
                        onClick={() => setIsOpen(false)}
                        className="rounded-md px-2 py-2 text-sm hover:bg-muted"
                      >
                        Barishal
                      </Link>

                      <Link
                        href="/properties?division=sylhet"
                        onClick={() => setIsOpen(false)}
                        className="rounded-md px-2 py-2 text-sm hover:bg-muted"
                      >
                        Sylhet
                      </Link>

                      <Link
                        href="/properties?division=rangpur"
                        onClick={() => setIsOpen(false)}
                        className="rounded-md px-2 py-2 text-sm hover:bg-muted"
                      >
                        Rangpur
                      </Link>

                      <Link
                        href="/properties?division=mymensingh"
                        onClick={() => setIsOpen(false)}
                        className="rounded-md px-2 py-2 text-sm hover:bg-muted"
                      >
                        Mymensingh
                      </Link>
                    </div>
                  </div>

                  {/* Saved */}
                  <Link
                    href="/wishlist"
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-muted"
                  >
                    Saved Properties
                  </Link>
                </nav>

                {/* Preferences */}
                <div className="border-t border-border/40 pt-5">
                  <div className="flex items-center justify-between px-3">
                    <span className="text-sm font-medium">Appearance</span>

                    <ThemeSwitcher />
                  </div>
                </div>

                {/* Account */}
                <div className="border-t border-border/40 pt-5">
                  <UserMenu />
                </div>

                {/* Landlord CTA */}
                <div className="border-t border-border/40 pt-5">
                  <Button className="w-full rounded-full">
                    <Link
                      href="/dashboard/landlord/properties/add"
                      onClick={() => setIsOpen(false)}
                    >
                      List Your Property
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="pb-3">
        <NavbarSearch />
      </div>
    </div>
  );
};

export default MobileNav;
