import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

const DashboardLoadingState = () => {
  return (
    <div className="h-full w-full overflow-y-auto bg-background">
        <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="h-7 w-48 animate-pulse rounded-md bg-muted" />
              <div className="h-4 w-80 max-w-full animate-pulse rounded-md bg-muted" />
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="space-y-4 p-5">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div
                      key={index}
                      className="h-14 animate-pulse rounded-md bg-muted"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
  )
}

export default DashboardLoadingState