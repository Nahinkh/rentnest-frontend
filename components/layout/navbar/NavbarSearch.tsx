import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

const NavbarSearch = () => {
  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

      <Input
        type="search"
        placeholder="Search properties..."
        className="h-9 rounded-full border-border/60 bg-muted/50 pl-9 pr-4 text-sm transition-colors focus-visible:bg-background"
      />
    </div>
  );
};

export default NavbarSearch;
