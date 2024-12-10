import { type NextRequest, NextResponse } from "next/server";
import { useSession } from "./features/auth/hooks/use-session";

export async function middleware(req: NextRequest) {
  const session = await useSession();

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
