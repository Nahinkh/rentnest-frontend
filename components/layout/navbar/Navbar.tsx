"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import UserMenu from "./UserMenu";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import DesktopNav from "./DesktopNav";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
   <header className="border-b border-border/45 sticky top-0 bg-background/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Logo />

        {/* Desktop Navigation Links */}
        <DesktopNav/>

        {/* Desktop Authentication Section */}
        <UserMenu />

        {/* Mobile / Tablet Menu Trigger */}
        <MobileMenu />

      </div>
    </header>
  );
};

export default Navbar;
