import Link from "next/link";
import React from "react";

const DesktopNav = () => {
  return (
    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
      <Link
        href="/properties"
        className="text-foreground transition-colors hover:text-foreground"
      >
        Browse
      </Link>
      <Link
        href="/dashboard/tenant"
        className="transition-colors hover:text-foreground"
      >
        Tenant Portal
      </Link>
      <Link
        href="/dashboard/landlord"
        className="transition-colors hover:text-foreground"
      >
        Landlord Portal
      </Link>
    </nav>
  );
};

export default DesktopNav;
