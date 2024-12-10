import { Logo as Brand } from "@/components/icons/logo";
import { Bell, Edit } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <header className="sticky top-0 h-20 border-b backdrop-blur">
      <nav className="mx-auto flex h-full max-w-screen-xl items-center justify-between p-4 md:px-8">
        <Logo />
        <NavActions />
      </nav>
    </header>
  );
};

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-2"
    >
      <Brand className="size-10" />
      <h3 className="font-semibold text-2xl">Echo</h3>
    </Link>
  );
};

const NavActions = async () => {
  const session = false;

  return (
    <>
      {session ? (
        <div className="flex items-center gap-4">
          <Button>
            <Edit className="size-4" />
            Write
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
          >
            <Bell />
          </Button>
          <Avatar className="size-9">
            <AvatarFallback className="text-xs">CN</AvatarFallback>
            <AvatarImage src={""} />
          </Avatar>
        </div>
      ) : (
        <Button asChild>
          <Link href="/sign-in">Login</Link>
        </Button>
      )}
    </>
  );
};
