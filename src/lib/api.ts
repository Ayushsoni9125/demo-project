import { User } from "@/types/user";

interface UsersResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}

export interface PaginatedUsers {
  users: User[];
  total: number;
  page: number;
  totalPages: number;
}

export async function getUsers(
  page: number = 1,
  limit: number = 10
): Promise<PaginatedUsers> {
  const skip = (page - 1) * limit;
  const response = await fetch(
    `https://dummyjson.com/users?limit=${limit}&skip=${skip}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const data: UsersResponse = await response.json();

  return {
    users: data.users,
    total: data.total,
    page,
    totalPages: Math.ceil(data.total / limit),
  };
}

export async function getUser(id: string): Promise<User> {
  const response = await fetch(`https://dummyjson.com/users/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }

  const user: User = await response.json();

  return user;
}