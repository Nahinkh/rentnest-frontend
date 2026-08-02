import React from 'react'
import Logo from './Logo'
import NavLinks from './NavLinks'
import UserMenu from './UserMenu'
import MobileMenu from './MobileMenu'

const Navbar = () => {
  return (
       <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-18 items-center justify-between px-4">
        <div className="flex items-center gap-10">
          <Logo />
          <NavLinks />
        </div>

        <UserMenu />

        <MobileMenu />
      </div>
    </header>
  )
}

export default Navbar