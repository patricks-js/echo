import type { ApiRoutes } from "@/app/api/[[...route]]/route";
import { hc } from "hono/client";
import { env } from "./env";

const client = hc<ApiRoutes>(env.NEXT_PUBLIC_APP_URL);

export const api = client.api;
