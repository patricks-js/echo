import { env } from "@/lib/env";
import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";

export const db = drizzle(env.DATABASE_URL, { schema });
