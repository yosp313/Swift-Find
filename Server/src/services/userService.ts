import { db } from "../config/db/db";
import { users } from "../config/db/schema";

export const allUsers = async () => await db.select().from(users);
