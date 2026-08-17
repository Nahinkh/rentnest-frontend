"use client"
import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Building, DollarSign, TrendingUp, Users, Wrench } from 'lucide-react'
import { useGetAllPropertiesByLandlord } from '@/hook/property/useProperty'

const LandLordMetrics = () => {
  const{data: properties}=useGetAllPropertiesByLandlord()
  return (
    <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {/* Total Properties */}
                <Card className="border-border/60 shadow-sm transition-colors hover:border-border">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                          Total Properties
                        </p>

                        <p className="text-xl font-semibold tracking-tight">
                          {properties?.length || 0}
                        </p>
                      </div>

                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted/60">
                        <Building className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>

                    <div className="mt-3 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                      <span className="font-medium text-foreground">3</span>
                      active
                      <span className="text-border">•</span>
                      <span className="font-medium text-foreground">2</span>
                      pending
                    </div>
                  </CardContent>
                </Card>

                {/* Monthly Revenue */}
                <Card className="border-border/60 shadow-sm transition-colors hover:border-border">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                          Monthly Revenue
                        </p>

                        <p className="text-xl font-semibold tracking-tight">
                          ৳103,000
                        </p>
                      </div>

                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted/60">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>

                    <div className="mt-3 flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-500">
                      <TrendingUp className="h-3 w-3" />
                      <span className="font-medium">+12%</span>
                      <span className="text-muted-foreground">
                        from last month
                      </span>
                    </div>
                  </CardContent>
                </Card>

                {/* Active Tenants */}
                <Card className="border-border/60 shadow-sm transition-colors hover:border-border">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                          Active Tenants
                        </p>

                        <p className="text-xl font-semibold tracking-tight">
                          3
                        </p>
                      </div>

                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted/60">
                        <Users className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>

                    <div className="mt-3 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                      <span className="font-medium text-foreground">100%</span>
                      occupancy rate
                    </div>
                  </CardContent>
                </Card>

                {/* Maintenance */}
                <Card className="border-border/60 shadow-sm transition-colors hover:border-border">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                          Open Maintenance
                        </p>

                        <p className="text-xl font-semibold tracking-tight">
                          1
                        </p>
                      </div>

                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted/60">
                        <Wrench className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>

                    <div className="mt-3 text-[11px] text-muted-foreground">
                      Pending contractor response
                    </div>
                  </CardContent>
                </Card>
              </section>
  )
}

export default LandLordMetrics