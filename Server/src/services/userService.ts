import { eq } from "drizzle-orm";
import { db } from "../config/db/db";
import { users, User } from "../config/db/schema";

export const allUsers = async () => await db.select().from(users);

export const getUser = async (id: string) =>
  await db.select().from(users).where(eq(users.id, id));

export const postUser = async (user: User) => {
  return await db.insert(users).values({
    id: user.id,
    email: user.email,
    imageUrl: user.imageUrl,
    fullName: user.fullName,
  });
};
