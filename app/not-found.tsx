import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-background px-4 py-16 text-foreground sm:px-6">
      <section className="w-full max-w-xl text-center">
        <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl border border-border bg-muted/50 text-primary">
          <Search aria-hidden="true" className="size-7" />
        </div>

        <p className="text-sm font-semibold tracking-[0.25em] text-primary">404</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-7 text-muted-foreground">
          We couldn’t find the page you were looking for. It may have moved, or
          the address might be incorrect.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button className="rounded-xl">
            <Link href="/" className="flex items-center gap-2"  >
              <Home aria-hidden="true" className="size-4" />
              Return to Home
            </Link>
          </Button>
          <Button variant="outline" className="rounded-xl">
            <Link href="/properties" className="flex items-center gap-2">
              <ArrowLeft aria-hidden="true" className="size-4" />
              Browse Properties
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
