import { createId } from "@paralleldrive/cuid2";
import { pgTable } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import type { z } from "zod";
import { accounts } from "./account";

export const posts = pgTable("posts", (t) => ({
  id: t
    .text()
    .$defaultFn(() => createId())
    .primaryKey()
    .notNull(),
  title: t.text().notNull(),
  slug: t.text().notNull(),
  description: t.text(),
  content: t.text().notNull(),
  tags: t.text().array().notNull(),
  favoritesCount: t.integer().default(0),
  authorId: t
    .text()
    .references(() => accounts.id, { onDelete: "cascade" })
    .notNull(),
  createdAt: t.timestamp().defaultNow().notNull(),
  updatedAt: t.timestamp().defaultNow().notNull(),
}));

export const insertPostSchema = createInsertSchema(posts, {
  tags: (schema) => schema.tags.array(),
});
export type PostInput = Omit<z.infer<typeof insertPostSchema>, "id">;
