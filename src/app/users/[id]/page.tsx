import Link from "next/link";
import { notFound } from "next/navigation";

import { getUser } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

interface UserDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function UserDetailsPage({
  params,
}: UserDetailsPageProps) {
  const { id } = await params;

  let user;

try {
  user = await getUser(id);
} catch {
  notFound();
}

  return (
    <main className="min-h-screen bg-background px-6 py-10">
      <div className="mx-auto max-w-3xl">

        <Link href="/">
          <Button variant="outline" className="mb-6">
            ← Back to Users
          </Button>
        </Link>

        <Card>
          <CardHeader>
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <Avatar className="h-24 w-24">
                <AvatarImage
                  src={user.image}
                  alt={`${user.firstName} ${user.lastName}`}
                />

                <AvatarFallback className="text-xl">
                  {user.firstName[0]}
                  {user.lastName[0]}
                </AvatarFallback>
              </Avatar>

              <div className="text-center sm:text-left">
                <CardTitle className="text-2xl">
                  {user.firstName} {user.lastName}
                </CardTitle>

                <p className="mt-1 text-muted-foreground">
                  @{user.username}
                </p>

                <div className="mt-3 flex justify-center gap-2 sm:justify-start">
                  <Badge variant="secondary">
                    Age {user.age}
                  </Badge>

                  <Badge variant="outline">
                    {user.gender}
                  </Badge>
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-8">

            {/* Contact */}
            <section>
              <h2 className="mb-3 text-lg font-semibold">
                Contact Information
              </h2>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Email
                  </p>
                  <p className="font-medium">
                    {user.email}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Phone
                  </p>
                  <p className="font-medium">
                    {user.phone}
                  </p>
                </div>
              </div>
            </section>

            {/* Address */}
            <section>
              <h2 className="mb-3 text-lg font-semibold">
                Address
              </h2>

              <div className="text-sm">
                <p>{user.address.address}</p>

                <p>
                  {user.address.city}, {user.address.state}
                </p>

                <p>{user.address.postalCode}</p>
              </div>
            </section>

            {/* Company */}
            <section>
              <h2 className="mb-3 text-lg font-semibold">
                Company
              </h2>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Company
                  </p>

                  <p className="font-medium">
                    {user.company.name}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Position
                  </p>

                  <p className="font-medium">
                    {user.company.title}
                  </p>
                </div>
              </div>
            </section>

          </CardContent>
        </Card>
      </div>
    </main>
  );
}