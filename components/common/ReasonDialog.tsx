"use client";
import { useEffect } from "react";
import { Textarea } from "../ui/textarea";
import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogCancel,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
interface ReasonDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  reasonLabel?: string;
  placeholder?: string;
  confirmText?: string;
  cancelText?: string;
  loading?: boolean;
  onConfirm: (reason: string) => void;
}
const ReasonDialog = ({
  open,
  onOpenChange,
  title,
  description,
  reasonLabel,
  placeholder,
  confirmText,
  cancelText,
  loading,
  onConfirm,
}: ReasonDialogProps) => {
  const [reason, setReason] = useState("");

  useEffect(() => {
    if (!open) {
      setReason("");
    }
  }, [open]);

  const trimmedReason = reason.trim();
  const isValid = trimmedReason.length > 0;

  const handleConfirm = () => {
    if (!isValid || loading) return;

    onConfirm(trimmedReason);
  };
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent className="w-[calc(100%-2rem)] max-w-md rounded-2xl">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>

          {description && (
            <AlertDialogDescription>{description}</AlertDialogDescription>
          )}
        </AlertDialogHeader>

        <div className="space-y-2">
          <label htmlFor="reason" className="text-sm font-medium">
            {reasonLabel}
          </label>

          <Textarea
            id="reason"
            value={reason}
            onChange={(event) => setReason(event.target.value)}
            placeholder={placeholder}
            rows={4}
            disabled={loading}
            className="resize-none rounded-xl"
          />

          {!isValid && reason.length > 0 && (
            <p className="text-xs text-destructive">Please provide a reason.</p>
          )}
        </div>

        <AlertDialogFooter className="flex-col-reverse gap-2 sm:flex-row">
          <AlertDialogCancel disabled={loading} className="rounded-xl">
            {cancelText}
          </AlertDialogCancel>

          <Button
            variant="destructive"
            disabled={!isValid || loading}
            onClick={handleConfirm}
            className="rounded-xl"
          >
            {loading ? "Processing..." : confirmText}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ReasonDialog;
