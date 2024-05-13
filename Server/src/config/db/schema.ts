import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: text("id").primaryKey().notNull(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  imageUrl: text("image_url"),
});

export const orders = pgTable("orders", {
  id: serial("id").primaryKey().notNull(),
  products: text("products").notNull(),
  country: text("location").notNull(),
  city: text("location").notNull(),

  userId: text("user_id").notNull(),
});

export type User = typeof users.$inferSelect;
export type Order = {
  products: string;
  userId: string;
  city: string;
  country: string;
};
