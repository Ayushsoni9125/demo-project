"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <h1 className="mb-3 text-2xl font-bold">
          Something went wrong
        </h1>

        <p className="mb-6 text-muted-foreground">
          We could not load the users. Please try again.
        </p>

        <Button onClick={() => reset()}>
          Try Again
        </Button>
      </div>
    </main>
  );
}