import type { PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <main className="grid h-screen w-screen place-items-center">
      {children}
    </main>
  );
}
