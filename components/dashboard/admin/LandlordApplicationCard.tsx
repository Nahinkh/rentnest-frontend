"use client";
import ConfirmDialog from "@/app/dashboard/common/ConfirmDialog";
import ReasonDialog from "@/components/common/ReasonDialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useReviewLandlordApplication } from "@/hook/admin/useReviewLandlordApplication";
import { LandlordApplication } from "@/services/admin/admin.service";
import { CalendarDays, Check, Mail, MapPin, Phone, X } from "lucide-react";
import React, { useState } from "react";

interface LandlordApplicationCardProps {
  application: LandlordApplication;
}
const LandlordApplicationCard = ({
  application,
}: LandlordApplicationCardProps) => {
  const { mutate: reviewApplication, isPending } =
    useReviewLandlordApplication();
  const { user } = application;
  const [showApproveDialog, setShowApproveDialog] = useState(false);
  const [showRejectDialog, setShowRejectDialog] = useState(false);

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
          className="w-fit rounded-full bg-yellow-500/10 text-yellow-600 dark:text-yellow-400"
        >
          Pending
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

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
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
          <div className="flex flex-col gap-2 border-t pt-4 sm:flex-row sm:justify-end">
            <Button
              variant="outline"
              className="rounded-xl"
              disabled={isPending}
              onClick={() => setShowRejectDialog(true)}
            >
              <X className="mr-2 size-4" />
              Reject
            </Button>

            <Button
              className="rounded-xl"
              disabled={isPending}
              onClick={() => setShowApproveDialog(true)}
            >
              <Check className="mr-2 size-4" />
              Approve
            </Button>
          </div>
          <ConfirmDialog
            open={showApproveDialog}
            onOpenChange={setShowApproveDialog}
            title="Approve landlord application?"
            description={`Are you sure you want to approve ${user.name} as a RentNest landlord?`}
            confirmText="Approve"
            cancelText="Cancel"
            destructive
            loading={isPending}
            onConfirm={() => {
              reviewApplication(
                {
                  applicationId: application.id,
                  status: "APPROVED",
                },
                {
                  onSuccess: () => {
                    setShowApproveDialog(false);
                  },
                },
              );
            }}
          />
          <ReasonDialog
            open={showRejectDialog}
            onOpenChange={setShowRejectDialog}
            title="Reject landlord application?"
            description={`Please provide a reason for rejecting ${user.name}'s landlord application.`}
            reasonLabel="Rejection reason"
            placeholder="Explain why this application is being rejected..."
            confirmText="Reject Application"
            cancelText="cancel"
            loading={isPending}
            onConfirm={(reason) => {
              reviewApplication(
                {
                  applicationId: application.id,
                  status: "REJECTED",
                  rejectionReason: reason,
                },
                {
                  onSuccess: () => {
                    setShowRejectDialog(false);
                  },
                },
              );
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default LandlordApplicationCard;
