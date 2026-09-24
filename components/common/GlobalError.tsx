import { AlertCircle, Loader2, RefreshCw } from 'lucide-react';
import React from 'react'
import { Button } from '../ui/button';

interface GlobalErrorProps {
  message?: string;
  onRetry?: () => void;
}

const GlobalError =({ message, onRetry }: GlobalErrorProps) => {
  return (
   <div className="flex min-h-[50vh] w-full items-center justify-center">
      <div className="flex max-w-md flex-col items-center gap-4 px-6 text-center">
        <div className="flex size-12 items-center justify-center rounded-full bg-destructive/10">
          <AlertCircle className="size-6 text-destructive" />
        </div>

        <div>
          <h2 className="text-lg font-semibold">
            Something went wrong
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            {message}
          </p>
        </div>

        {onRetry && (
          <Button
            variant="outline"
            onClick={onRetry}
            className="rounded-xl"
          >
            <RefreshCw className="mr-2 size-4" />
            Try Again
          </Button>
        )}
      </div>
    </div> 
  )
}

export default GlobalError