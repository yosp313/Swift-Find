import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().notNull(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  imageUrl: text("image_url").notNull(),
});

export const products = pgTable("products", {
  id: uuid("id").primaryKey().notNull(),
  productName: text("product_name").notNull(),
  description: text("description"),
  price: integer("price").notNull(),
});

export type User = typeof users.$inferSelect;
export type Product = typeof products.$inferSelect;
