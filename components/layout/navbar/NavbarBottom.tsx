import Link from "next/link";
import React from "react";
import { Heart, Home, } from "lucide-react";
import PropertyMenu from "./PropertyMenu";
import NavbarSearch from "./NavbarSearch";

const NavbarBottom = () => {
  return (
    <div className="hidden h-12 items-center gap-4 border-t border-border/40 md:flex">
      {/* Navigation */}
      <nav className="flex shrink-0 items-center gap-1">
        {/* Home */}
        <Link
          href="/"
          className="flex h-9 items-center gap-2 rounded-md px-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
        >
          <Home className="h-4 w-4" />
          <span>Home</span>
        </Link>

        {/* Properties */}
        <PropertyMenu />

        {/* Saved Properties */}
        <Link
          href="/wishlist"
          aria-label="Saved Properties"
          className="flex h-9 items-center gap-2 rounded-md px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <Heart className="h-4 w-4" />

          <span className="hidden lg:inline">Saved Properties</span>
        </Link>
      </nav>

      {/* Search */}
      <div className="ml-auto min-w-0 flex-1 max-w-sm lg:max-w-md">
        <NavbarSearch />
      </div>
    </div>
  );
};

export default NavbarBottom;
