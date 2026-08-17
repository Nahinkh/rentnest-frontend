"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Building } from 'lucide-react'
import React from 'react'

const DashboardErrorState = () => {
  return (
    <div className="h-full w-full overflow-y-auto bg-background">
        <div className="mx-auto flex min-h-[60vh] w-full max-w-7xl items-center justify-center px-4">
          <Card className="w-full max-w-md">
            <CardContent className="flex flex-col items-center justify-center p-8 text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
                <Building className="h-5 w-5 text-destructive" />
              </div>

              <h2 className="text-base font-semibold">
                Unable to load properties
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                Something went wrong while loading your properties.
                Please try again.
              </p>

              <Button
                className="mt-5"
                onClick={() => window.location.reload()}
              >
                Try Again
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
  )
}

export default DashboardErrorState