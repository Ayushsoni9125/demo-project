import { User } from "@/types/user";

interface UsersResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}

export async function getUsers(): Promise<User[]> {
  const response = await fetch("https://dummyjson.com/users");

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const data: UsersResponse = await response.json();

  return data.users;
}

export async function getUser(id: string): Promise<User> {
  const response = await fetch(`https://dummyjson.com/users/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }

  const user: User = await response.json();

  return user;
}