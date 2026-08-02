import { Home } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
        <div className='bg-primary-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold'>
            <Home size={20} />
        </div>

    </Link>
  )
}

export default Logo