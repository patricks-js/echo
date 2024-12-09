import { db } from "@/db";
import { users } from "@/db/schema";
import { zValidator } from "@hono/zod-validator";
import { eq, or } from "drizzle-orm";
import { Hono } from "hono";
import { registerSchema } from "../schemas";

export const authRoutes = new Hono().post(
  "/",
  zValidator("json", registerSchema),
  async (c) => {
    const { username, email, password } = c.req.valid("json");

    const [user] = await db
      .select({ id: users.id })
      .from(users)
      .where(or(eq(users.email, email), eq(users.username, username)));

    if (user)
      return c.json(
        { error: "Account creation failed. Please try again." },
        409,
      );

    await db.insert(users).values({
      username,
      email,
      password,
    });

    return c.json({ message: "Registered successful!" }, 201);
  },
);
