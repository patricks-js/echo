import { Logo } from "@/components/icons/logo";

export function Navbar() {
  return (
    <header className="sticky top-0 h-20 border-b backdrop-blur">
      <nav className="mx-auto flex h-full max-w-screen-xl items-center justify-between p-4 md:px-8">
        <div>
          <Logo className="size-10" />
        </div>
        <ul className="flex items-center gap-4">
          <li>Write</li>
          <li>Logout</li>
          <li>AV</li>
        </ul>
      </nav>
    </header>
  );
}
