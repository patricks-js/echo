import { zValidator } from "@hono/zod-validator";
import bcrypt from "bcryptjs";
import { eq, or } from "drizzle-orm";
import { Hono } from "hono";

import { db } from "@/db";
import { accounts, insertAccountSchema } from "@/db/schema";

export const accountsRoutes = new Hono()
  .get("/", async (c) => {
    const selectedAccounts = await db.select().from(accounts);

    return c.json({ accounts: selectedAccounts });
  })
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
  );
