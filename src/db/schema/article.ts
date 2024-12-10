import { createId } from "@paralleldrive/cuid2";
import { index, pgTable } from "drizzle-orm/pg-core";
import { createInsertSchema, createUpdateSchema } from "drizzle-zod";
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
    description: t.text(),
    content: t.text().notNull(),
    tags: t.text().array(),
    authorId: t
      .text("author_id")
      .references(() => users.id, { onDelete: "cascade" })
      .notNull(),
    createdAt: t.timestamp("created_at").defaultNow().notNull(),
    updatedAt: t.timestamp("updated_at").defaultNow().notNull(),
  }),
  (t) => [index("slug_idx").on(t.slug)],
);

export const insertArticleSchema = createInsertSchema(articles);
export const updateArticleSchema = createUpdateSchema(articles);
