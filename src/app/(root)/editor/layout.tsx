import type { PropsWithChildren } from "react";

export default function EditorLayout({
  children,
}: Readonly<PropsWithChildren>) {
  return <div className="mx-auto max-w-screen-md">{children}</div>;
}
