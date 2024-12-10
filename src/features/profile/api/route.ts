import { db } from "@/db";
import { users } from "@/db/schema";
import { zValidator } from "@hono/zod-validator";
import { eq } from "drizzle-orm";
import { Hono } from "hono";
import { usernameParamSchema } from "../schemas";

export const profileRoutes = new Hono()
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
  )
  .delete(
    "/:username/follow",
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
