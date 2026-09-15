"use client";
import Logo from "./NavbarLogo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
     <header className="sticky top-0 z-50 border-b border-border/45 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6">
        {/* Desktop */}
        <div className="hidden w-full items-center md:flex">
          <Logo />

          <DesktopNav />
        </div>

        {/* Mobile */}
        <div className="flex w-full md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
