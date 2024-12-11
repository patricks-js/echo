import type { Variables } from "@/types/jwt-payload";
import { Hono } from "hono";

export const articleRoutes = new Hono<{ Variables: Variables }>()
  .get("/")
  .get("/feed")
  .get("/:slug")
  .post("/")
  .put("/:slug")
  .delete("/:slug");
