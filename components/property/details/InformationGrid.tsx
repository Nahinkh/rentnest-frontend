import React from 'react'

const InformationGrid = () => {
  return (
     <div className="space-y-4">
              <h2 className="text-xl font-semibold tracking-tight">Information</h2>
              <div className="border border-border/60 rounded-xl overflow-hidden bg-card divide-y divide-border/40">
                <div className="grid grid-cols-2 sm:grid-cols-4 p-4 text-sm gap-4">
                  <div>
                    <span className="text-xs text-muted-foreground block">Price</span>
                    <span className="font-medium">$425,000</span>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block">Area Size</span>
                    <span className="font-medium">1,450 SQ.FT.</span>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block">Rooms</span>
                    <span className="font-medium">5</span>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block">Year Built</span>
                    <span className="font-medium">2022</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 p-4 text-sm gap-4">
                  <div>
                    <span className="text-xs text-muted-foreground block">Lot Area Size</span>
                    <span className="font-medium">1,164 SQ.FT.</span>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block">Property ID</span>
                    <span className="font-medium">H-224</span>
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block">Bathrooms</span>
                    <span className="font-medium">2</span>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
  )
}

export default InformationGrid