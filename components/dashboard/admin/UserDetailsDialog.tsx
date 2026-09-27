import { AdminUser } from "@/app/dashboard/admin/UsersTable";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CalendarDays, Mail, Phone, Shield } from "lucide-react";
import React from "react";

interface UserDetailsDialogProps {
  user: AdminUser | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
const UserDetailsDialog = ({ user, open, onOpenChange }: UserDetailsDialogProps) => {
  if (!user) return null;
  const joinedDate = new Date(user.createdAt).toLocaleDateString("en-BD", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[calc(100%-2rem)] max-w-lg rounded-2xl">
        <DialogHeader>
          <DialogTitle>User Details</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Profile */}
          <div className="flex items-center gap-4">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-lg font-semibold text-primary">
              {user.name
                .split(" ")
                .map((name) => name[0])
                .join("")
                .slice(0, 2)
                .toUpperCase()}
            </div>

            <div className="min-w-0">
              <h3 className="truncate text-lg font-semibold">{user.name}</h3>

              <div className="mt-1 flex flex-wrap items-center gap-2">
                <Badge variant="secondary">{user.role}</Badge>

                <Badge
                  variant={user.status === "ACTIVE" ? "default" : "destructive"}
                >
                  {user.status}
                </Badge>
              </div>
            </div>
          </div>

          {/* Information */}
          <div className="grid gap-3">
            <div className="flex items-center gap-3 rounded-xl border p-3">
              <Mail className="size-4 text-muted-foreground" />

              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="truncate text-sm font-medium">{user.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border p-3">
              <Phone className="size-4 text-muted-foreground" />

              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="text-sm font-medium">
                  {user.phone || "Not provided"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border p-3">
              <Shield className="size-4 text-muted-foreground" />

              <div>
                <p className="text-xs text-muted-foreground">Role</p>
                <p className="text-sm font-medium">{user.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border p-3">
              <CalendarDays className="size-4 text-muted-foreground" />

              <div>
                <p className="text-xs text-muted-foreground">Joined</p>
                <p className="text-sm font-medium">{joinedDate}</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UserDetailsDialog;
