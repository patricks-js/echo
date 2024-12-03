import { Logo } from "@/components/icons/logo";
import Link from "next/link";

export function Navbar() {
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
        <ul className="flex items-center gap-4">
          <li>Write</li>
          <li>Logout</li>
          <li>AV</li>
        </ul>
      </nav>
    </header>
  );
}
