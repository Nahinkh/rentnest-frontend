"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useProfile } from "@/hook/auth/userProfile";
import {
  Building,
  CreditCard,
  FileText,
  History,
  Home,
  LayoutDashboard,
  LogOut,
  ShieldCheck,
  Star,
  Users,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { dashboardNav } from "./dashboard-nav";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const { data: user } = useProfile();

  const currentRole = user?.role?.toLowerCase() as
    | keyof typeof dashboardNav
    | undefined;

  const role = currentRole ?? "tenant";

  const currentNavItems = dashboardNav[role];

  const userName = user?.name ?? "User";
  const userEmail = user?.email ?? "";

  const initials = userName
    .split(" ")
    .map((name) => name[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background text-foreground">
        {/* Sidebar */}
        <Sidebar className="border-r border-border/50">
          {/* Brand */}
          <SidebarHeader className="flex h-16 items-center border-b border-border/50 px-5">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold tracking-tight"
            >
              <span className="flex size-7 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground">
                R
              </span>

              <span>
                Rent<span className="text-primary">Nest</span>
              </span>
            </Link>
          </SidebarHeader>

          {/* Navigation */}
          <SidebarContent className="px-3 py-5">
            <SidebarMenu className="gap-1">
              {currentNavItems.map((item) => {
                const Icon = item.icon;

                const isActive =
                  pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);

                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      
                      isActive={isActive}
                      className="h-10"
                    >
                      <Link
                        href={item.href}
                        className="flex items-center gap-3"
                      >
                        <Icon className="size-4" />

                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarContent>

          {/* User */}
          <SidebarFooter className="border-t border-border/50 p-3">
            <div className="flex items-center gap-3 rounded-xl p-2">
              <Avatar className="size-9">
                <AvatarImage
                  src={
                    (user as { profileImage?: string } | undefined)
                      ?.profileImage ?? ""
                  }
                  alt={userName}
                />

                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{userName}</p>

                <p className="truncate text-xs text-muted-foreground">
                  {userEmail}
                </p>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="size-8 shrink-0 text-muted-foreground hover:text-destructive"
                aria-label="Logout"
              >
                <LogOut className="size-4" />
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>

        {/* Workspace */}
        <div className="flex min-w-0 flex-1 flex-col">
          {/* Header */}
          <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center border-b border-border/50 bg-background/95 px-4 backdrop-blur-md sm:px-6">
            <div className="flex items-center gap-3">
              <SidebarTrigger />

              <div className="hidden h-5 w-px bg-border sm:block" />

              <div>
                <p className="text-sm font-medium capitalize">
                  {role} Dashboard
                </p>

                <p className="hidden text-xs text-muted-foreground sm:block">
                  Manage your RentNest account
                </p>
              </div>
            </div>
          </header>

          {/* Page */}
          <main className="min-w-0 flex-1 overflow-x-hidden">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
