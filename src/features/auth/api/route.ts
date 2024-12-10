import { db } from "@/db";
import { users } from "@/db/schema";
import { env } from "@/lib/env";
import { zValidator } from "@hono/zod-validator";
import { eq, or } from "drizzle-orm";
import { Hono } from "hono";
import { setCookie } from "hono/cookie";
import { sign } from "hono/jwt";
import { AUTH_COOKIE } from "../constants";
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
      .select({
        id: users.id,
        username: users.username,
        email: users.email,
        password: users.password,
        image: users.image,
      })
      .from(users)
      .where(eq(users.email, email));

    if (!user || password !== user.password) {
      return c.json({ error: "Invalid credentials." }, 401);
    }

    const payload = {
      sub: user.id,
      username: user.username,
      email: user.email,
      image: user.image,
      exp: Math.floor(Date.now() / 1000) + 60 * 10,
    };

    const sessionToken = await sign(payload, env.AUTH_SECRET);

    setCookie(c, AUTH_COOKIE, sessionToken, {
      path: "/",
      httpOnly: true,
      sameSite: "Strict",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24,
    });

    return c.json({ message: "You are logged. Welcome back!" }, 200);
  });
