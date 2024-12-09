import { createId } from "@paralleldrive/cuid2";
import { index, pgTable } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

export const users = pgTable(
  "users",
  (t) => ({
    id: t
      .text()
      .$defaultFn(() => createId())
      .primaryKey()
      .notNull(),
    username: t.text().unique().notNull(),
    email: t.text().unique().notNull(),
    password: t.text().notNull(),
    bio: t.text(),
    image: t.text(),
    createdAt: t.timestamp().defaultNow().notNull(),
    updatedAt: t.timestamp().defaultNow().notNull(),
  }),
  (t) => [index("idx_email").on(t.email), index("idx_username").on(t.username)],
);

export const insertUserSchema = createInsertSchema(users, {
  email: (schema) => schema.email(),
});
