import { db } from "@/db";
import { users } from "@/db/schema";
import { AUTH_COOKIE } from "@/features/auth/constants";
import { env } from "@/lib/env";
import type { Variables } from "@/types/jwt-payload";
import { eq } from "drizzle-orm";
import { Hono } from "hono";
import { jwt } from "hono/jwt";

export const userRoutes = new Hono<{ Variables: Variables }>()
  .use("*", jwt({ secret: env.AUTH_SECRET, cookie: AUTH_COOKIE }))
  .get("/", async (c) => {
    const payload = c.get("jwtPayload");

    const [me] = await db
      .select({
        bio: users.bio,
        createdAt: users.createdAt,
      })
      .from(users)
      .where(eq(users.id, payload.sub));

    const data = {
      id: payload.sub,
      username: payload.username,
      email: payload.email,
      image: payload.image,
      bio: me.bio,
      createdAt: me.createdAt,
    };

    return c.json({ data }, 200);
  })
  .put("/");
