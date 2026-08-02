import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const UserMenu = () => {
  return (
     <div className="hidden items-center gap-3 lg:flex">
      <Button variant="ghost">
        <Link href="/login">Login</Link>
      </Button>

      <Button>
        <Link href="/register">Get Started</Link>
      </Button>
    </div>
  )
}

export default UserMenu