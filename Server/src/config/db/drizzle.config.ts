import { configDotenv } from "dotenv";
import { defineConfig } from "drizzle-kit";

configDotenv();

export default defineConfig({
  schema: "./schema.ts",
  out: "./migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: `postgres://postgres.vxciehofwvxlgkebrvva:${process.env.DATABASE_PASSWORD}@aws-0-eu-central-1.pooler.supabase.com:5432/postgres`,
  },
});
