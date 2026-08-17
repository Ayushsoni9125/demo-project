import Link from "next/link";

import { User } from "@/types/user";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

interface UserCardProps {
  user: User;
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <Card className="h-full transition-shadow hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Avatar className="h-14 w-14">
            <AvatarImage
              src={user.image}
              alt={`${user.firstName} ${user.lastName}`}
            />

            <AvatarFallback>
              {user.firstName[0]}
              {user.lastName[0]}
            </AvatarFallback>
          </Avatar>

          <div className="min-w-0">
            <h2 className="truncate text-lg font-semibold">
              {user.firstName} {user.lastName}
            </h2>

            <p className="truncate text-sm text-muted-foreground">
              @{user.username}
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="mb-5 flex gap-2">
          <Badge variant="secondary">
            Age {user.age}
          </Badge>

          <Badge variant="outline">
            {user.gender}
          </Badge>
        </div>

        <div className="space-y-2 text-sm">
          <p className="truncate">
            <span className="font-medium">Email:</span>{" "}
            {user.email}
          </p>

          <p>
            <span className="font-medium">Phone:</span>{" "}
            {user.phone}
          </p>
        </div>

        <Link
          href={`/users/${user.id}`}
          className="block"
        >
          <Button className="mt-5 w-full">
            View Details
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}