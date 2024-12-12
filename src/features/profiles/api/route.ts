import { db } from "@/db";
import { follows, users } from "@/db/schema";
import { AUTH_COOKIE } from "@/features/auth/constants";
import { env } from "@/lib/env";
import type { Variables } from "@/types/jwt-payload";
import { zValidator } from "@hono/zod-validator";
import { eq } from "drizzle-orm";
import { Hono } from "hono";
import { jwt } from "hono/jwt";
import { usernameParamSchema } from "../schemas";

export const profileRoutes = new Hono<{ Variables: Variables }>()
  .get("/:username", zValidator("param", usernameParamSchema), async (c) => {
    const username = c.req.param("username");

    const [profile] = await db
      .select({
        id: users.id,
        username: users.username,
        email: users.email,
        bio: users.bio,
        image: users.image,
      })
      .from(users)
      .where(eq(users.username, username));

    if (!profile) {
      return c.json({ error: "Profile not found." }, 404);
    }

    return c.json({ data: profile }, 200);
  })
  .post(
    "/:username/follow",
    jwt({ secret: env.AUTH_SECRET, cookie: AUTH_COOKIE }),
    zValidator("param", usernameParamSchema),
    async (c) => {
      const { username: me, sub } = c.get("jwtPayload");
      const username = c.req.param("username");

      if (username === me) {
        return c.json({ error: "Você não pode se seguir" }, 409);
      }

      const [profile] = await db
        .select({
          id: users.id,
        })
        .from(users)
        .where(eq(users.username, username));

      if (!profile) {
        return c.json({ error: "Profile not found." }, 404);
      }

      await db.insert(follows).values({
        followerId: sub,
        followedId: profile.id,
      });

      return c.json({}, 204);
    },
  )
  .delete(
    "/:username/follow",
    jwt({ secret: env.AUTH_SECRET, cookie: AUTH_COOKIE }),
    zValidator("param", usernameParamSchema),
    async (c) => {
      const username = c.req.param("username");

      const [profile] = await db
        .select({
          id: users.id,
        })
        .from(users)
        .where(eq(users.username, username));

      if (!profile) {
        return c.json({ error: "Profile not found." }, 404);
      }

      return c.json({ success: true }, 200);
    },
  );
