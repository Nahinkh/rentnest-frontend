"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { userLogout } from "@/hook/auth/userLogout";
import { useProfile } from "@/hook/auth/userProfile";
import {
  FolderGit2,
  LayoutDashboard,
  Link2,
  LogOut,
  UserRound,
} from "lucide-react";
import Link from "next/link";

const UserMenu = () => {
  const { data: user, isPending } = useProfile();
  const userRole = user?.role?.toLocaleLowerCase() || "tenant";
  console.log(user)
  const { mutate: logout } = userLogout();
  if (isPending) return null;
  return (
    <div className="hidden md:flex items-center gap-3">
      {user && !isPending ? (
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Avatar className="h-9 w-9 border border-border">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="User Avatar"
                />
                <AvatarFallback>
                  {user?.name
                    ?.split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            }
            nativeButton={false}
          />
          <DropdownMenuContent className="w-40" align="start">
            <DropdownMenuGroup>
              <DropdownMenuLabel>{user?.name}</DropdownMenuLabel>
              <DropdownMenuItem>
                <Link href="/profile">Profile</Link>
                <DropdownMenuShortcut>
                  <UserRound size={16} />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={`/dashboard/${userRole}`}>Dashboard</Link>
                <DropdownMenuShortcut>
                  <LayoutDashboard size={16} />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                GitHub
                <DropdownMenuShortcut>
                  <FolderGit2 size={16} />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Linkedin
                <DropdownMenuShortcut>
                  <Link2 size={16} />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={() => logout()}>
                <LogOut className="w-4 h-4" />
                {isPending ? "Logging out..." : "Logout"}
                <DropdownMenuShortcut>
                  <LogOut size={16} />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <>
          <Button variant="ghost" size="sm">
            <Link href="/login">Sign In</Link>
          </Button>
          <Button size="sm">
            <Link href="/register">Get Started</Link>
          </Button>
        </>
      )}
    </div>
  );
};

export default UserMenu;
