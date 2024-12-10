import { pgTable, primaryKey } from "drizzle-orm/pg-core";
import { users } from "./user";

export const follows = pgTable(
  "follows",
  (t) => ({
    followedId: t
      .text("followed_id")
      .references(() => users.id)
      .notNull(),
    followerId: t
      .text("follower_id")
      .references(() => users.id)
      .notNull(),
    followedAt: t.timestamp("followed_at").defaultNow().notNull(),
  }),
  (t) => [primaryKey({ columns: [t.followedId, t.followerId] })],
);
