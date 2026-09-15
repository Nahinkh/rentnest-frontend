import Link from "next/link";
import React from "react";
import RentalSearch from "./RentalSearch";
import WishlistButton from "./WishlistButton";
import ThemeSwitcher from "./ThemeSwitcher";
import UserMenu from "./UserMenu";
import { Heart, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Navbar from "./Navbar";
import NavbarLogo from "./NavbarLogo";

const DesktopNav = () => {
  return (
    <div className="hidden md:flex md:flex-1 md:items-center md:gap-6">
      {/* Center — Search */}
      <div className="flex flex-1 justify-center">
        <RentalSearch />
      </div>

      <div className="flex shrink-0 items-center gap-1">
        {/* Wishlist */}
        <WishlistButton />

        {/* Theme */}
        <ThemeSwitcher />
      </div>
    </div>
  );
};
export default DesktopNav;
