import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-5xl font-bold">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-semibold">
          User Not Found
        </h2>

        <p className="mt-2 text-muted-foreground">
          The user you're looking for doesn't exist.
        </p>

        <Link href="/" className="mt-6 inline-block">
          <Button>
            Back to Users
          </Button>
        </Link>
      </div>
    </main>
  );
}