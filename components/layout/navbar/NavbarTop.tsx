import React from "react";
import NavbarLogo from "./NavbarLogo";
import LocationSelector from "./LocationSelector";
import ThemeSwitcher from "./ThemeSwitcher";
import UserMenu from "./UserMenu";
import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LandlordCTA from "./LandlordCTA";

const NavbarTop = () => {
  return (
    <div className="flex h-16 items-center justify-between gap-4">
      {/* Logo */}
      <NavbarLogo />

      {/* Right Actions */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {/* List Your Property */}
        <LandlordCTA />

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
