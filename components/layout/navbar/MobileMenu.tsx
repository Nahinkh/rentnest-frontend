"use client"

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const MobileMenu = () => {
    const links = [
    { label: "Home", href: "/" },
    { label: "Properties", href: "/properties" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    ]
  return (
    <Sheet>
      <SheetTrigger>
        <Button
          size="icon"
          variant="ghost"
          className="lg:hidden"
        >
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent side="left">
        <div className="mt-10 flex flex-col gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu