"use client";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = () => {
  const links = [
    { label: "Home", href: "/" },
    { label: "Properties", href: "/properties" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const pathname = usePathname();
  return <nav className="hidden lg:flex items-center gap-8">
    {
        links.map((link) => (
            <a key={link.href} href={link.href} className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === link.href ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`}>
                {link.label}
            </a>
        ))
    }
  </nav>;
};

export default NavLinks;
