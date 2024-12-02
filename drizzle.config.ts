import { env } from "@/lib/env";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/db/schema",
  out: "./drizzle",
  strict: true,
  casing: "snake_case",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
