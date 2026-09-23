"use client";
import NavbarTop from "./NavbarTop";
import NavbarBottom from "./NavbarBottom";
import MobileNav from "./MobileNav/MobileNav";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-border/45 bg-background/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Desktop & Tablet */}
        <div className="hidden md:block">
          <NavbarTop />
          <NavbarBottom />
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
