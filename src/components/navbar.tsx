import { Logo } from "@/components/icons/logo";
import { getSession } from "@/lib/auth";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

export async function Navbar() {
  const session = await getSession();

  console.log(session);

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
        {session ? (
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarFallback>CN</AvatarFallback>
              <AvatarImage src={session.avatarUrl} />
            </Avatar>
          </div>
        ) : (
          <Button asChild>
            <Link href="/sign-in">Login</Link>
          </Button>
        )}
      </nav>
    </header>
  );
}
