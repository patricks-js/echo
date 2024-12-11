import { Navbar } from "@/components/navbar";
import type { PropsWithChildren } from "react";

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <div className="relative">
      <Navbar />
      <main className="mx-auto max-w-screen-xl px-6 py-8 pb-20 md:px-8">
        {children}
      </main>
    </div>
  );
}
