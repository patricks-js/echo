import { Hono } from "hono";
import { handle } from "hono/vercel";
import { accountsRoutes } from "./accounts";

export const runtime = "nodejs";

const app = new Hono();

const routes = app.basePath("/api").route("/accounts", accountsRoutes);

export const GET = handle(app);
export const POST = handle(app);

export type ApiRoutes = typeof routes;
