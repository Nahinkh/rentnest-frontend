import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MoreHorizontal } from "lucide-react";
import React from "react";
export interface AdminUser {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  role: "ADMIN" | "LANDLORD" | "TENANT";
  status: "ACTIVE" | "BLOCKED";
  createdAt: string;
  updatedAt: string;
}

interface UsersTableProps {
  users: AdminUser[];
  isLoading?: boolean;
}

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
};

const roleLabel = {
  ADMIN: "Admin",
  LANDLORD: "Landlord",
  TENANT: "Tenant",
};
const UsersTable = ({ users, isLoading }: UsersTableProps) => {
  if (isLoading) {
    return (
      <Card className="rounded-2xl border-border/60">
        <CardContent className="p-0">
          <div className="space-y-4 p-5">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="h-12 animate-pulse rounded-lg bg-muted"
              />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!users.length) {
    return (
      <Card className="rounded-2xl border-border/60">
        <CardContent className="flex min-h-48 items-center justify-center p-6">
          <div className="text-center">
            <p className="text-sm font-medium">No users found</p>

            <p className="mt-1 text-sm text-muted-foreground">
              Try changing your search or filters.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }
  return (
    <Card className="rounded-2xl border-border/60">
      <CardContent className="p-0">
        {/* Desktop Table */}
        <div className="hidden overflow-x-auto md:block">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/60 bg-muted/30">
                <th className="px-5 py-3 text-left font-medium text-muted-foreground">
                  User
                </th>

                <th className="px-5 py-3 text-left font-medium text-muted-foreground">
                  Phone
                </th>

                <th className="px-5 py-3 text-left font-medium text-muted-foreground">
                  Role
                </th>

                <th className="px-5 py-3 text-left font-medium text-muted-foreground">
                  Status
                </th>

                <th className="px-5 py-3 text-left font-medium text-muted-foreground">
                  Joined
                </th>

                <th className="w-12 px-3 py-3" />
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-border/50 last:border-0"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="size-9">
                        <AvatarFallback>
                          {getInitials(user.name)}
                        </AvatarFallback>
                      </Avatar>

                      <div className="min-w-0">
                        <p className="truncate font-medium">{user.name}</p>

                        <p className="truncate text-xs text-muted-foreground">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4 text-muted-foreground">
                    {user.phone || "—"}
                  </td>

                  <td className="px-5 py-4">
                    <Badge
                      variant="secondary"
                      className="rounded-full font-normal"
                    >
                      {roleLabel[user.role]}
                    </Badge>
                  </td>

                  <td className="px-5 py-4">
                    <Badge
                      variant={
                        user.status === "ACTIVE" ? "default" : "destructive"
                      }
                      className="rounded-full"
                    >
                      {user.status === "ACTIVE" ? "Active" : "Blocked"}
                    </Badge>
                  </td>

                  <td className="px-5 py-4 text-muted-foreground">
                    {new Date(user.createdAt).toLocaleDateString("en-BD", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>

                  <td className="px-3 py-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-8"
                      aria-label={`Actions for ${user.name}`}
                    >
                      <MoreHorizontal className="size-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile List */}
        <div className="divide-y divide-border/50 md:hidden">
          {users.map((user) => (
            <div key={user.id} className="flex items-center gap-3 p-4">
              <Avatar className="size-10 shrink-0">
                <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
              </Avatar>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="truncate text-sm font-medium">{user.name}</p>

                  <Badge
                    variant={
                      user.status === "ACTIVE" ? "default" : "destructive"
                    }
                    className="shrink-0 rounded-full px-2 py-0 text-[10px]"
                  >
                    {user.status === "ACTIVE" ? "Active" : "Blocked"}
                  </Badge>
                </div>

                <p className="mt-0.5 truncate text-xs text-muted-foreground">
                  {user.email}
                </p>

                <div className="mt-2 flex items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="rounded-full px-2 py-0 text-[10px] font-normal"
                  >
                    {roleLabel[user.role]}
                  </Badge>

                  <span className="text-xs text-muted-foreground">
                    {user.phone || "No phone"}
                  </span>
                </div>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="size-8 shrink-0"
                aria-label={`Actions for ${user.name}`}
              >
                <MoreHorizontal className="size-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UsersTable;
