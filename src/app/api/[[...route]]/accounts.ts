import { zValidator } from "@hono/zod-validator";
import bcrypt from "bcryptjs";
import { eq, or } from "drizzle-orm";
import { Hono } from "hono";
import { setCookie } from "hono/cookie";

import { db } from "@/db";
import { accounts, insertAccountSchema } from "@/db/schema";

export const accountsRoutes = new Hono()
  .post(
    "/",
    zValidator("json", insertAccountSchema.omit({ id: true })),
    async (c) => {
      const body = c.req.valid("json");

      const [userExists] = await db
        .select({ id: accounts.id })
        .from(accounts)
        .where(
          or(
            eq(accounts.email, body.email),
            eq(accounts.username, body.username),
          ),
        );

      if (userExists) return c.json({ message: "User already exists" }, 409);

      const passwordHash = await bcrypt.hash(body.password, 7);

      await db.insert(accounts).values({
        ...body,
        password: passwordHash,
      });

      return c.json({ message: "Registered successful!" }, 201);
    },
  )
  .post(
    "/login",
    zValidator(
      "json",
      insertAccountSchema.pick({ email: true, password: true }),
    ),
    async (c) => {
      const body = c.req.valid("json");

      const [user] = await db
        .select()
        .from(accounts)
        .where(eq(accounts.email, body.email));

      if (!user) return c.json({ message: "Invalid credentials" }, 401);

      const passwordMatch = await bcrypt.compare(body.password, user.password);

      if (!passwordMatch)
        return c.json({ message: "Invalid credentials" }, 401);

      const payload = {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        avatarUrl: "https://github.com/patricks-js.png",
      };

      setCookie(c, "user_session", JSON.stringify(payload), {
        path: "/",
        httpOnly: true,
        maxAge: 60 * 60,
      });

      return c.json({ message: "Authentication successful!" });
    },
  );
