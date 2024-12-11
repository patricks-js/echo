import { createId } from "@paralleldrive/cuid2";
import { sql } from "drizzle-orm";
import { index, pgTable } from "drizzle-orm/pg-core";
import { createInsertSchema, createUpdateSchema } from "drizzle-zod";
import { z } from "zod";
import { users } from "./user";

export const articles = pgTable(
  "articles",
  (t) => ({
    id: t
      .text()
      .$defaultFn(() => createId())
      .primaryKey()
      .notNull(),
    title: t.text().notNull(),
    slug: t.text().unique().notNull(),
    description: t.text(), // ? add "" (empty string) as default?
    content: t.text().notNull(),
    tags: t.text().array().default(sql /*sql*/`'{}'::text[]`),
    authorId: t
      .text("author_id")
      .references(() => users.id, { onDelete: "cascade" })
      .notNull(),
    createdAt: t.timestamp("created_at").defaultNow().notNull(),
    updatedAt: t.timestamp("updated_at").defaultNow().notNull(),
  }),
  (t) => [index("slug_idx").on(t.slug)],
);

export const insertArticleSchema = createInsertSchema(articles, {
  title: (schema) => schema.min(5).max(80),
  description: z.string().min(0).max(200).optional(),
  tags: z.array(z.string()).nonempty("Please at least one item"),
});
export const updateArticleSchema = createUpdateSchema(articles, {
  title: (schema) => schema.min(5).max(80).optional(),
  description: z.string().min(0).max(200).optional(),
  tags: z.array(z.string()).nonempty("Please at least one item"),
});
