import { pgTable } from "drizzle-orm/pg-core";
import { accounts } from "./account";
import { posts } from "./post";

export const favorite = pgTable("favorites", (t) => ({
  id: t.serial().primaryKey().notNull(),
  userId: t
    .text()
    .references(() => accounts.id)
    .notNull(),
  postId: t
    .text()
    .references(() => posts.id)
    .notNull(),
  createdAt: t.timestamp().defaultNow().notNull(),
}));
