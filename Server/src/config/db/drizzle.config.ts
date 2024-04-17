import { configDotenv } from "dotenv";
import { Config } from "drizzle-kit";

configDotenv();

export default {
  schema: "./schema.ts",
  out: "./migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: `postgres://postgres.vxciehofwvxlgkebrvva:${process.env.DATABASE_PASSWORD}@aws-0-eu-central-1.pooler.supabase.com:5432/postgres`,
  },
} satisfies Config;
