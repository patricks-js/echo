import { pgTable } from "drizzle-orm/pg-core";
import { createInsertSchema, createUpdateSchema } from "drizzle-zod";
import { articles } from "./article";
import { users } from "./user";

export const comments = pgTable("comments", (t) => ({
  id: t.serial().primaryKey().notNull(),
  content: t.text().notNull(),
  articleId: t
    .text("article_id")
    .references(() => articles.id, { onDelete: "cascade" })
    .notNull(),
  authorId: t
    .text("author_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  createdAt: t.timestamp("created_at").defaultNow().notNull(),
  updatedAt: t.timestamp("updated_at").defaultNow().notNull(),
}));

export const insertCommentSchema = createInsertSchema(comments);
export const updateCommentSchema = createUpdateSchema(comments);
