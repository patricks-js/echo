import { db } from "@/db";
import { users } from "@/db/schema";
import { zValidator } from "@hono/zod-validator";
import { eq, or } from "drizzle-orm";
import { Hono } from "hono";
import { setCookie } from "hono/cookie";
import { loginSchema, registerSchema } from "../schemas";

export const authRoutes = new Hono()
  .post("/", zValidator("json", registerSchema), async (c) => {
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
  })
  .post("/login", zValidator("json", loginSchema), async (c) => {
    const { email, password } = c.req.valid("json");

    const [user] = await db
      .select({ id: users.id, password: users.password })
      .from(users)
      .where(eq(users.email, email));

    if (!user || password !== user.password) {
      return c.json({ error: "Invalid credentials." }, 401);
    }

    setCookie(c, "user_id", JSON.stringify({ userId: user.id }), {
      path: "/",
      httpOnly: true,
      maxAge: 60 * 60,
    });

    return c.json({ message: "You are logged. Welcome back!" }, 200);
  });
