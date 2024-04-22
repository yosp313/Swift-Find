import { pgTable, text, uuid } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: text("id").primaryKey().notNull(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  imageUrl: text("image_url"),
});

export const products = pgTable("products", {
  id: uuid("id").primaryKey().notNull(),
  slugId: text("slug_id").notNull(),
  cartId: uuid("cart_id").notNull(),
});

export const shoppingCarts = pgTable("shopping-carts", {
  id: uuid("id").notNull().primaryKey(),
  userId: text("user_id").notNull(),
});

export type User = typeof users.$inferSelect;
export type Product = typeof products.$inferSelect;
export type ShoppingCart = typeof shoppingCarts.$inferSelect;
