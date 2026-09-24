import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Activity } from 'lucide-react'
import React from 'react'

const RecentActivity = () => {
  return (
     <Card className="rounded-2xl border-border/60">
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Activity className="size-4" />
          </div>

          <div>
            <CardTitle className="text-base">Recent Activity</CardTitle>
            <p className="mt-1 text-xs text-muted-foreground">
              Latest activity across the RentNest platform.
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex min-h-32 items-center justify-center rounded-xl border border-dashed border-border/70">
          <p className="text-sm text-muted-foreground">
            No recent activity to display.
          </p>
        </div>
      </CardContent>
    </Card>   
  )
}

export default RecentActivity