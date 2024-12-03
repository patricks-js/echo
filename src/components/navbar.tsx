import { Logo } from "@/components/icons/logo";
import { cookies } from "next/headers";
import Link from "next/link";
import { Button } from "./ui/button";

export async function Navbar() {
  const cookie = await cookies();
  const userId = cookie.get("userId");

  return (
    <header className="sticky top-0 h-20 border-b backdrop-blur">
      <nav className="mx-auto flex h-full max-w-screen-xl items-center justify-between p-4 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <Logo className="size-10" />
          <h3 className="font-semibold text-2xl">Echo</h3>
        </Link>
        {userId ? (
          <ul className="flex items-center gap-4">
            <li>Write</li>
            <li>Logout</li>
            <li>AV</li>
          </ul>
        ) : (
          <Button asChild>
            <Link href="/sign-in">Login</Link>
          </Button>
        )}
      </nav>
    </header>
  );
}
