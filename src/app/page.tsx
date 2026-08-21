import { getUsers } from "@/lib/api";
import UserCard from "@/components/UserCard";

export default async function Home() {
  const users = await getUsers();

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
              {users.length}
            </span>{" "}
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

      </div>
    </main>
  );
}