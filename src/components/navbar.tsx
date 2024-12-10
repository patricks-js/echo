import { Logo as Brand } from "@/components/icons/logo";
import { useSession } from "@/features/auth/hooks/use-session";
import { AccountPopover } from "@/features/me/components/account-popover";
import { Bell, Edit } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 h-20 border-b backdrop-blur">
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
  const session = await useSession();

  return (
    <>
      {session ? (
        <div className="flex items-center gap-4">
          <Button asChild>
            <Link href="/editor">
              <Edit className="size-4" />
              Write
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
          >
            <Bell />
          </Button>
          <AccountPopover />
        </div>
      ) : (
        <Button asChild>
          <Link href="/sign-in">Login</Link>
        </Button>
      )}
    </>
  );
};
