"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/toast";
import { useApplyAsLandlord } from "@/hook/auth/useApplyAsLandlord";
import { ArrowLeft, Building2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ApplyLandlordPage = () => {
  const router = useRouter();
  const { mutate: applyAsLandlord, isPending } = useApplyAsLandlord();

  const [reason, setReason] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    applyAsLandlord(
      {
        reason: reason.trim() || undefined,
        additionalInfo: additionalInfo.trim() || undefined,
      },
      {
        onSuccess: () => {
          toast.add({
            title: "Application submitted",
            description:
              "Your landlord application has been submitted successfully.",
          });

          router.push("/dashboard/tenant");
        },
        onError: (error: any) => {
          toast.add({
            title: "Application failed",
            description:
              error?.response?.data?.message ||
              error?.message ||
              "Failed to submit your landlord application.",
          });
        },
      },
    );
  };
  return (
    <div className="mx-auto w-full max-w-2xl space-y-6">
      {/* Back */}
      <Button
        variant="ghost"
        className="rounded-xl px-2"
        onClick={() => router.back()}
      >
        <ArrowLeft className="mr-2 size-4" />
        Back
      </Button>

      {/* Header */}
      <div className="space-y-2">
        <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Building2 className="size-6" />
        </div>

        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Become a Landlord
          </h1>

          <p className="mt-1 text-sm leading-6 text-muted-foreground">
            Apply to become a RentNest landlord and start listing your
            properties for tenants.
          </p>
        </div>
      </div>

      {/* Application Form */}
      <Card className="rounded-2xl border-border/60">
        <CardHeader>
          <div>
            <h2 className="font-semibold">Landlord Application</h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Tell us a little about why you want to become a landlord.
            </p>
          </div>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Reason */}
            <div className="space-y-2">
              <Label htmlFor="reason">
                Why do you want to become a landlord?
              </Label>

              <Textarea
                id="reason"
                value={reason}
                onChange={(event) => setReason(event.target.value)}
                placeholder="Tell us briefly about your purpose..."
                rows={5}
                className="resize-none rounded-xl"
              />

              <p className="text-xs text-muted-foreground">
                This helps our admin team understand your application.
              </p>
            </div>

            {/* Additional information */}
            <div className="space-y-2">
              <Label htmlFor="additionalInfo">
                Additional information
                <span className="ml-1 font-normal text-muted-foreground">
                  (optional)
                </span>
              </Label>

              <Textarea
                id="additionalInfo"
                value={additionalInfo}
                onChange={(event) => setAdditionalInfo(event.target.value)}
                placeholder="Anything else you'd like us to know..."
                rows={4}
                className="resize-none rounded-xl"
              />
            </div>

            {/* Actions */}
            <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <Button
                type="button"
                variant="outline"
                className="rounded-xl"
                disabled={isPending}
                onClick={() => router.back()}
              >
                Cancel
              </Button>

              <Button type="submit" className="rounded-xl" disabled={isPending}>
                {isPending ? "Submitting..." : "Submit Application"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Information */}
      <div className="rounded-2xl border bg-muted/30 p-4">
        <p className="text-sm font-medium">What happens after you apply?</p>

        <p className="mt-1 text-sm leading-6 text-muted-foreground">
          Your application will be reviewed by the RentNest admin team. Once
          approved, your account will be upgraded to a landlord account and you
          can start listing properties.
        </p>
      </div>
    </div>
  );
};

export default ApplyLandlordPage;
