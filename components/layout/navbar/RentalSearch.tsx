import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

const RentalSearch = () => {
  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

      <Input
        placeholder="Search rentals, cities, or locations..."
        className="h-9 rounded-full bg-muted/50 pl-9 pr-4 text-sm"
      />
    </div>
  );
};

export default RentalSearch;
