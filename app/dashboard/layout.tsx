"use client"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { useProfile } from '@/hook/auth/userProfile'
import { Building, CreditCard, FileText, History, Home, LayoutDashboard, LogOut, ShieldCheck, Star, Users, Wrench } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const DashboardLayout = ({children}: { children: React.ReactNode }) => {
    const pathname = usePathname()

  const {data:user,isPending,isLoading} = useProfile()
  const currentRole = user?.role?.toLocaleLowerCase() || 'tenant' // Default to 'tenant' if role is not available

  // Define role-specific navigation menus
  const navConfig = {
    tenant: [
      { title: "Overview", href: "/dashboard/tenant", icon: LayoutDashboard },
      { title: "My Properties", href: "/dashboard/tenant/properties", icon: Home },
      { title: "Request History", href: "/dashboard/tenant/requests", icon: History },
      { title: "Reviews", href: "/dashboard/tenant/reviews", icon: Star },
      { title: "Billing & Payments", href: "/dashboard/tenant/billing", icon: CreditCard },
      { title: "Maintenance", href: "/dashboard/tenant/maintenance", icon: Wrench },
    ],
    landlord: [
      { title: "Overview", href: "/dashboard/landlord", icon: LayoutDashboard },
      { title: "Manage Properties", href: "/dashboard/landlord/manage-properties", icon: Home},
      { title: "Tenant Leases", href: "/dashboard/landlord/leases", icon: FileText },
      { title: "Add Property", href: "/dashboard/landlord/add-property", icon: Home},
      { title: "Maintenance Logs", href: "/dashboard/landlord/maintenance", icon: Wrench },
    ],
    admin: [
      { title: "Admin Overview", href: "/dashboard/admin", icon: LayoutDashboard },
      { title: "User Management", href: "/dashboard/admin/users", icon: Users },
      { title: "Platform Properties", href: "/dashboard/admin/properties", icon: Building },
      { title: "Verifications", href: "/dashboard/admin/verifications", icon: ShieldCheck },
    ]
  }

  const currentNavItems = navConfig[currentRole as keyof typeof navConfig] || navConfig.tenant
  return (
   <SidebarProvider>
      <div className="h-screen w-full flex overflow-hidden bg-background text-foreground">
        
        {/* Latest shadcn Sidebar Implementation */}
        <Sidebar className="border-r border-border/40">
          <SidebarHeader className="h-16 px-6 flex items-center border-b border-border/40">
            <Link href="/" className="font-semibold tracking-tight text-lg flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Vesta. <span className="text-xs uppercase text-muted-foreground font-mono">({currentRole})</span>
            </Link>
          </SidebarHeader>

          <SidebarContent className="px-4 py-6">
            <SidebarMenu className="space-y-1">
              {currentNavItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton  isActive={isActive}>
                      <Link href={item.href} className="flex items-center gap-3">
                        <Icon className="w-4 h-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarContent>

          <SidebarFooter className="p-4 border-t border-border/40">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8 border border-border">
                  <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
                  <AvatarFallback>RD</AvatarFallback>
                </Avatar>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-xs font-medium truncate">Rachel Diaz</span>
                  <span className="text-[10px] text-muted-foreground truncate">rachel@example.com</span>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive">
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>

        {/* Main Content Workspace Header & Viewport Wrapper */}
        <div className="flex-1 flex flex-col h-full overflow-hidden">
          <header className="h-16 border-b border-border/40 px-6 flex items-center justify-between bg-background/80 backdrop-blur-md shrink-0">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <span className="text-sm font-medium text-muted-foreground capitalize">
                {currentRole} Portal Workspace
              </span>
            </div>
          </header>

          <main className="flex-1 flex flex-col h-[calc(100vh-4rem)] overflow-hidden">
            {children}
          </main>
        </div>

      </div>
    </SidebarProvider>
  )
}

export default DashboardLayout