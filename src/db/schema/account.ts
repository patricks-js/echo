import { createId } from "@paralleldrive/cuid2";
import { pgTable } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import type { z } from "zod";

export const account = pgTable("accounts", (t) => ({
  id: t
    .text()
    .$defaultFn(() => createId())
    .primaryKey()
    .notNull(),
  name: t.text().notNull(),
  username: t.text().unique().notNull(),
  email: t.text().unique().notNull(),
  password: t.text().notNull(),
}));

export const insertAccountSchema = createInsertSchema(account, {
  email: (schema) => schema.email.email(),
});
export type AccountInput = z.infer<typeof insertAccountSchema>;
