import { Suspense } from "react";
import { getUsers } from "@/lib/api";
import UserCard from "@/components/UserCard";
import Pagination from "@/components/Pagination";

interface HomeProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const currentPage = Math.max(1, Number(params.page) || 1);

  const { users, total, totalPages } = await getUsers(currentPage, 10);

  const start = (currentPage - 1) * 10 + 1;
  const end = Math.min(currentPage * 10, total);

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* Header */}
        <div className="mb-10">
          <p className="mb-2 text-sm font-medium text-primary">
            USER DIRECTORY
          </p>

          <h1 className="text-4xl font-bold tracking-tight">
            Find a User
          </h1>

          <p className="mt-2 text-muted-foreground">
            Browse our directory and view detailed user information.
          </p>
        </div>

        {/* User count */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Showing{" "}
            <span className="font-semibold text-foreground">
              {start}–{end}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-foreground">{total}</span>{" "}
            users
          </p>
        </div>

        {/* Users */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {users.map((user) => (
            <UserCard
              key={user.id}
              user={user}
            />
          ))}
        </div>

        {/* Pagination */}
        <Suspense>
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </Suspense>

      </div>
    </main>
  );
}