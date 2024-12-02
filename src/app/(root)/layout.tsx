import { Navbar } from "@/components/navbar";
import type { PropsWithChildren } from "react";

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
