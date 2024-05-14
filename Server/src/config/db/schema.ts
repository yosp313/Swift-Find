import {
  pgTable,
  pgEnum,
  text,
  numeric,
  uuid,
  timestamp,
} from "drizzle-orm/pg-core";

export const keyStatus = pgEnum("key_status", [
  "expired",
  "invalid",
  "valid",
  "default",
]);
export const keyType = pgEnum("key_type", [
  "stream_xchacha20",
  "secretstream",
  "secretbox",
  "kdf",
  "generichash",
  "shorthash",
  "auth",
  "hmacsha256",
  "hmacsha512",
  "aead-det",
  "aead-ietf",
]);
export const aalLevel = pgEnum("aal_level", ["aal3", "aal2", "aal1"]);
export const codeChallengeMethod = pgEnum("code_challenge_method", [
  "plain",
  "s256",
]);
export const factorStatus = pgEnum("factor_status", ["verified", "unverified"]);
export const factorType = pgEnum("factor_type", ["webauthn", "totp"]);
export const action = pgEnum("action", [
  "ERROR",
  "TRUNCATE",
  "DELETE",
  "UPDATE",
  "INSERT",
]);
export const equalityOp = pgEnum("equality_op", [
  "in",
  "gte",
  "gt",
  "lte",
  "lt",
  "neq",
  "eq",
]);
export const oneTimeTokenType = pgEnum("one_time_token_type", [
  "phone_change_token",
  "email_change_token_current",
  "email_change_token_new",
  "recovery_token",
  "reauthentication_token",
  "confirmation_token",
]);

export const users = pgTable("users", {
  id: text("id").primaryKey().notNull(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  imageUrl: text("image_url"),
});

export const orders = pgTable("orders", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
  products: text("products").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade", onUpdate: "cascade" }),
  country: text("country").notNull(),
  city: text("city").notNull(),
  address: text("address").notNull(),
  cost: numeric("cost").notNull(),
});

export type User = typeof users.$inferSelect;
export type Order = {
  products: string;
  userId: string;
  country: string;
  city: string;
  address: string;
  cost: string;
};
