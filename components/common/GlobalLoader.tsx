import { Loader2 } from "lucide-react";
import React from "react";

interface GlobalLoaderProps {
  message?: string;
}

const GlobalLoader = ({ message }: GlobalLoaderProps) => {
  return (
    <div className="flex min-h-[50vh] w-full items-center justify-center">
      <div className="flex flex-col items-center gap-3 text-center">
        <Loader2 className="size-7 animate-spin text-primary" />

        <p className="text-sm text-muted-foreground">{message}</p>
      </div>
    </div>
  );
};

export default GlobalLoader;
