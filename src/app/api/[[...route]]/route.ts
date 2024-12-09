import { Hono } from "hono";
import { handle } from "hono/vercel";

export const runtime = "nodejs";

const app = new Hono();

const routes = app.basePath("/api").get("/hello", async (c) => c.text("Hello"));

export const GET = handle(app);
export const POST = handle(app);

export type ApiRoutes = typeof routes;
