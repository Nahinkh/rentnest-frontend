import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LandlordApplication } from "@/services/admin/admin.service";
import {
  CalendarDays,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  XCircle,
} from "lucide-react";
import React from "react";

interface LandlordApplicationHistoryCardProps {
  application: LandlordApplication;
}
const LandlordApplicationHistoryCard = ({
  application,
}: LandlordApplicationHistoryCardProps) => {
  const { user } = application;

  const isApproved = application.status === "APPROVED";

  const initials = user.name
    .split(" ")
    .map((name) => name[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const location = [user.city, user.district, user.division]
    .filter(Boolean)
    .join(", ");
  return (
    <Card className="overflow-hidden rounded-2xl border-border/60">
      <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
            {initials}
          </div>

          <div className="min-w-0">
            <h2 className="truncate font-semibold">{user.name}</h2>

            <p className="truncate text-sm text-muted-foreground">
              {user.email}
            </p>
          </div>
        </div>

        <Badge
          variant="secondary"
          className={
            isApproved
              ? "w-fit rounded-full bg-green-500/10 text-green-600 dark:text-green-400"
              : "w-fit rounded-full bg-red-500/10 text-red-600 dark:text-red-400"
          }
        >
          {isApproved ? (
            <>
              <CheckCircle2 className="mr-1 size-3.5" />
              Approved
            </>
          ) : (
            <>
              <XCircle className="mr-1 size-3.5" />
              Rejected
            </>
          )}
        </Badge>
      </CardHeader>

      <CardContent className="space-y-5">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="size-4 shrink-0" />
            <span className="truncate">{user.email}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="size-4 shrink-0" />
            <span>{user.phone || "Not provided"}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 shrink-0" />
            <span className="truncate">
              {location || "Location not provided"}
            </span>
          </div>
        </div>

        <div className="grid gap-3 text-xs text-muted-foreground sm:grid-cols-2">
          <div className="flex items-center gap-2">
            <CalendarDays className="size-3.5" />

            <span>
              Applied{" "}
              {new Date(application.createdAt).toLocaleDateString("en-BD", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>

          {application.reviewedAt && (
            <div className="flex items-center gap-2">
              <CalendarDays className="size-3.5" />

              <span>
                Reviewed{" "}
                {new Date(application.reviewedAt).toLocaleDateString("en-BD", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          )}
        </div>

        <div className="border-t pt-4">
          <p className="text-sm font-medium">Application reason</p>

          <p className="mt-1 text-sm leading-6 text-muted-foreground">
            {application.reason || "No reason provided."}
          </p>

          {application.additionalInfo && (
            <div className="mt-4">
              <p className="text-sm font-medium">Additional information</p>

              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                {application.additionalInfo}
              </p>
            </div>
          )}

          {!isApproved && application.rejectionReason && (
            <div className="mt-4 rounded-xl bg-red-500/5 p-4">
              <p className="text-sm font-medium text-red-600 dark:text-red-400">
                Rejection reason
              </p>

              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                {application.rejectionReason}
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default LandlordApplicationHistoryCard;
