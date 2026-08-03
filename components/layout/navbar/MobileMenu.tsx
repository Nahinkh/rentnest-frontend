"use client"

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { useProfile } from '@/hook/auth/userProfile'
import { LayoutDashboard, LogOut, Menu, User } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const MobileMenu = () => {
  const {data:user,isPending}=useProfile()
  const [isOpen, setIsOpen] = useState(false);
    const links = [
    { label: "Home", href: "/" },
    { label: "Properties", href: "/properties" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    ]
  return (
    <div className="flex md:hidden items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger >
              <div className="h-9 w-9">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </div>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <SheetHeader className="text-left border-b border-border/40 pb-4 mb-4">
                <SheetTitle className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Vesta. Menu
                </SheetTitle>
              </SheetHeader>
              
              <div className="flex flex-col gap-6">
                {/* Mobile Navigation Links */}
                <nav className="flex flex-col gap-4 text-sm font-medium text-muted-foreground">
                  {links.map((link) => (
                    <Link 
                      href={link.href} 
                      onClick={() => setIsOpen(false)}
                      className="transition-colors py-1"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="border-t border-border/40 pt-6 flex flex-col gap-3">
                  {user && !isPending ? (
                    <>
                      <div className="flex items-center gap-3 px-1 pb-2">
                        <Avatar className="h-9 w-9 border border-border">
                          <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" />
                          <AvatarFallback>RD</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium">Rachel Diaz</span>
                          <span className="text-xs text-muted-foreground">rachel.diaz@example.com</span>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full justify-start gap-2">
                        <Link href="/dashboard/tenant" onClick={() => setIsOpen(false)}>
                          <LayoutDashboard className="w-4 h-4" /> Dashboard
                        </Link>
                      </Button>
                      <Button variant="outline" className="w-full justify-start gap-2">
                        <Link href="/profile" onClick={() => setIsOpen(false)}>
                          <User className="w-4 h-4" /> Profile
                        </Link>
                      </Button>
                      <Button 
                        variant="destructive" 
                        className="w-full justify-start gap-2 mt-2" 

                      >
                        <LogOut className="w-4 h-4" /> Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant="outline" className="w-full justify-center">
                        <Link href="/login" onClick={() => setIsOpen(false)}>Sign In</Link>
                      </Button>
                      <Button className="w-full justify-center">
                        <Link href="/register" onClick={() => setIsOpen(false)}>Get Started</Link>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
  )
}

export default MobileMenu