import { configDotenv } from "dotenv";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

configDotenv();

const connectionString: string = `postgres://postgres.vxciehofwvxlgkebrvva:${process.env.DATABASE_PASSWORD}@aws-0-eu-central-1.pooler.supabase.com:5432/postgres`;

const client = postgres(connectionString, { prepare: false });

export const db = drizzle(client);
