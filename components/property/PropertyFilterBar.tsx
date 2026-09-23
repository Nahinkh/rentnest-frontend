import { MapPin, Search, SlidersHorizontal } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface PropertyFilterBarProps {
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  onFilterClick?: () => void;
  onSortClick?: () => void;
}
const PropertyFilterBar = ({
  searchValue,
  onSearchChange,
  onFilterClick,
  onSortClick,
}: PropertyFilterBarProps) => {
  return (
    <div className="flex w-full flex-col gap-2">
      {/* Search */}
      <div className="flex items-center gap-2">
        <div className="relative min-w-0 flex-1">
          <Search
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />

          <Input
            value={searchValue}
            onChange={(event) => onSearchChange?.(event.target.value)}
            placeholder="Search properties..."
            className="h-10 rounded-full bg-background pl-9 pr-4"
          />
        </div>

        {/* Filter */}
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="h-10 w-10 shrink-0 rounded-full"
          onClick={onFilterClick}
          aria-label="Open filters"
        >
          <SlidersHorizontal className="h-4 w-4" />
        </Button>
      </div>

      {/* Quick Filters */}
      <div className="flex min-w-0 gap-2 overflow-x-auto pb-1 scrollbar-none">
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="h-9 shrink-0 gap-1.5 rounded-full"
          onClick={onFilterClick}
        >
          <MapPin className="h-3.5 w-3.5" />
          Location
        </Button>

        <Button
          type="button"
          variant="outline"
          size="sm"
          className="h-9 shrink-0 rounded-full"
          onClick={onFilterClick}
        >
          Property Type
        </Button>

        <Button
          type="button"
          variant="outline"
          size="sm"
          className="h-9 shrink-0 rounded-full"
          onClick={onFilterClick}
        >
          Price
        </Button>

        <Button
          type="button"
          variant="outline"
          size="sm"
          className="h-9 shrink-0 rounded-full"
          onClick={onFilterClick}
        >
          Bedrooms
        </Button>

        <Button
          type="button"
          variant="outline"
          size="sm"
          className="h-9 shrink-0 rounded-full"
          onClick={onSortClick}
        >
          Sort
        </Button>
      </div>
    </div>
  );
};

export default PropertyFilterBar;
