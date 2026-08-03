import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { CalendarDays, CircleCheckBig, Heart, MessageSquare, Phone, ShieldCheck } from 'lucide-react'
import React from 'react'

interface PropertyBookingCardProps {
  propertyId: string;
  rentPrice: number | string;
  availability: string;
  landlord: {
    name: string;
    email: string;
  };
}
const PropertyBookingCard = ({ propertyId, rentPrice, availability, landlord }: PropertyBookingCardProps    ) => {
     const isAvailable = availability === "AVAILABLE";
  return (
    <div className="lg:sticky lg:top-24 space-y-6">
            
            {/* Contact Agent Card */}
            <Card className="border-border/60 shadow-md">
              <CardContent className="p-6 space-y-6">
                <div className="space-y-1">
                  <h3 className="font-semibold text-base">Contact With Us Now!</h3>
                  <p className="text-xs text-muted-foreground">Schedule a tour or ask questions directly to the listing agent.</p>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg border border-border/40 bg-secondary/20">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-bold text-sm text-foreground">
                    RD
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">Rachel Diaz</h4>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                      <Phone className="w-3 h-3" /> (555) 824-204
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="w-full gap-2 text-xs">
                    <Phone className="w-3.5 h-3.5" /> Call Now
                  </Button>
                  <Button className="w-full gap-2 text-xs">
                    <MessageSquare className="w-3.5 h-3.5" /> Send A Message
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Mini Promotional / Banner Template Widget */}
            <div className="rounded-xl border border-border/60 bg-gradient-to-br from-secondary/80 to-secondary/30 p-6 space-y-4 relative overflow-hidden">
              <div className="space-y-1">
                <Badge variant="outline" className="text-[10px] mb-1">New Template</Badge>
                <h4 className="font-semibold text-base">Advertise your real estate to a wider audience</h4>
                <p className="text-xs text-muted-foreground">List your active property portfolios with our high converting landing templates.</p>
              </div>
              <Button size="sm" variant="secondary" className="w-full bg-background hover:bg-background/90">
                Try It Now
              </Button>
            </div>

          </div>
  )
}

export default PropertyBookingCard