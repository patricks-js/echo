import { articleRoutes } from "@/features/articles/api/route";
import { authRoutes } from "@/features/auth/api/route";
import { userRoutes } from "@/features/me/api/route";
import { profileRoutes } from "@/features/profiles/api/route";
import { Hono } from "hono";
import { handle } from "hono/vercel";

const app = new Hono();

const routes = app
  .basePath("/api")
  .route("/auth", authRoutes)
  .route("/user", userRoutes)
  .route("/profiles", profileRoutes)
  .route("/articles", articleRoutes);

const handler = handle(app);

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const DELETE = handler;

export type ApiRoutes = typeof routes;
