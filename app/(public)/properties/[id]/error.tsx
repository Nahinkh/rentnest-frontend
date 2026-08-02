"use client"

import { Button } from '@/components/ui/button'
import React from 'react'

const error = ( { reset }: { reset: () => void } ) => {
  return (
     <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center gap-4">
      <h2 className="text-3xl font-bold">Something went wrong!</h2>

      <Button onClick={() => reset()}>
        Try Again
      </Button>
    </div>
  )
}

export default error