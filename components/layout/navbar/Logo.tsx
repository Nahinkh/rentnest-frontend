import { Home } from "lucide-react";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-semibold tracking-tight text-lg flex items-center gap-2"
    >
      <span className="h-2 w-2 rounded-full bg-primary" />
      Vesta.
    </Link>
  );
};

export default Logo;
