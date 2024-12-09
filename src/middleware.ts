import { type NextRequest, NextResponse } from "next/server";
import { getSession } from "./lib/auth";

export async function middleware(req: NextRequest) {
  const session = await getSession();

  if (session) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/sign-in", req.url));
}

export const config = {
  matcher: [
    // Always run for API routes
    "/editor(.*)",
    "/settings(.*)",
  ],
};
