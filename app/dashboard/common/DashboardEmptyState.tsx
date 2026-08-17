"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

interface EmptyStateProps {
  hasSearch: boolean;
  onClear: () => void;
}

const DashboardEmptyState = ({ hasSearch, onClear }: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-muted">
        <Building className="h-5 w-5 text-muted-foreground" />
      </div>

      <h3 className="text-sm font-semibold">
        {hasSearch ? "No properties found" : "No properties yet"}
      </h3>

      <p className="mt-1 max-w-sm text-xs leading-relaxed text-muted-foreground">
        {hasSearch
          ? "Try searching with a different property title, location, or category."
          : "You haven't listed any properties yet. Add your first property to get started."}
      </p>

      {hasSearch ? (
        <Button
          variant="outline"
          size="sm"
          className="mt-4 h-8 text-xs"
          onClick={onClear}
        >
          Clear Search
        </Button>
      ) : (
        <Button
          variant="outline"
          size="sm"
          className="mt-4 h-8 gap-1.5 text-xs"
        >
          <Link href="/dashboard/landlord/properties/add">
            <Plus className="h-3.5 w-3.5" />
            Add Property
          </Link>
        </Button>
      )}
    </div>
  );
};

export default DashboardEmptyState;
