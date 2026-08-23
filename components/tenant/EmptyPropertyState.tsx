import React from 'react'
import { Card, CardContent } from '../ui/card';
import { Building } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

interface EmptyPropertyStateProps {
  title: string;
  description: string;
}
const EmptyPropertyState = ({ title, description }: EmptyPropertyStateProps) => {
    
  return (
       <Card className="border-dashed border-border/70 bg-card/50">
      <CardContent className="flex flex-col items-center justify-center px-6 py-12 text-center">
        <div className="mb-3 flex size-10 items-center justify-center rounded-full bg-secondary">
          <Building className="size-5 text-muted-foreground" />
        </div>

        <h3 className="text-sm font-semibold">
          {title}
        </h3>

        <p className="mt-1 max-w-sm text-xs leading-relaxed text-muted-foreground">
          {description}
        </p>

        <Button
          size="sm"
          className="mt-4 h-8 text-xs"
        >
          <Link href="/properties">
            Browse Properties
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

export default EmptyPropertyState