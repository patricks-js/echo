import { db } from "@/db";
import { updateUserSchema, users } from "@/db/schema";
import { AUTH_COOKIE } from "@/features/auth/constants";
import { env } from "@/lib/env";
import type { Variables } from "@/types/jwt-payload";
import { zValidator } from "@hono/zod-validator";
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
  .put("/", zValidator("json", updateUserSchema), async (c) => {
    const { sub } = c.get("jwtPayload");
    const body = c.req.valid("json");

    const [updated] = await db
      .update(users)
      .set({
        ...body,
        updatedAt: new Date(),
      })
      .where(eq(users.id, sub))
      .returning({
        username: users.username,
        email: users.email,
        password: users.password,
        bio: users.bio,
        image: users.image,
        updatedAt: users.updatedAt,
      });

    return c.json({ data: updated }, 200);
  });
