import React from "react";
import NavbarLogo from "./NavbarLogo";
import LocationSelector from "./LocationSelector";
import ThemeSwitcher from "./ThemeSwitcher";
import UserMenu from "./UserMenu";
import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NavbarTop = () => {
  return (
    <div className="flex h-16 items-center justify-between gap-4">
      {/* Logo */}
      <NavbarLogo />

      {/* Right Actions */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {/* List Your Property */}
        <Button
          
          size="sm"
          className="hidden h-9 rounded-full px-4 lg:inline-flex"
        >
          <Link
            href="/dashboard/landlord/properties/add"
            className="flex items-center gap-1.5"
          >
            <PlusIcon className="h-4 w-4" />
            <span>List Your Property</span>
          </Link>
        </Button>

        {/* Location */}
        <LocationSelector />

        {/* Theme */}
        <ThemeSwitcher />

        {/* User */}
        <UserMenu />
      </div>
    </div>
  );
};

export default NavbarTop;
