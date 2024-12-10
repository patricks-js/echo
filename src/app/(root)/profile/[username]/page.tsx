"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AccountSidebar } from "@/features/profile/components/account-sidebar";
import { useGetProfile } from "@/features/profile/hooks/use-get-profile";
import { Eye } from "lucide-react";
import { use } from "react";

type PageParams = {
  params: Promise<{
    username: string;
  }>;
};

export default function ProfilePage({ params }: PageParams) {
  const { username } = use(params);
  const { data, isLoading, error } = useGetProfile(username);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong</div>;
  if (!data) return <div>Something went wrong</div>;

  return (
    <div className="grid grid-cols-[288px_1fr] gap-8">
      <AccountSidebar user={data} />
      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 7 }).map((_, a) => (
          <div
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={a}
            className="max-w-xs space-y-4 rounded-2xl border px-6 py-8 shadow-card"
          >
            <header className="flex items-center justify-between">
              <time
                dateTime="2024-12-09 00:00:00"
                className="rounded-full bg-secondary px-3 py-2"
              >
                20 May, 2023
              </time>
              <span className="inline-flex items-center gap-1">
                <Eye className="size-5" />
                232
              </span>
            </header>
            <div className="flex flex-col items-start gap-4">
              <p className="line-clamp-2 text-muted-foreground">
                Lorem ipsum dolor quaerat unde beatae architecto sapiente aut
                modi quidem libero consectetur ullam quam! Laborum, adipisci
                officia.
              </p>
              <img
                src=""
                alt="banner"
                className="h-40 w-full rounded-lg border bg-secondary"
              />
            </div>
            <footer className="flex items-center justify-between">
              <Badge variant="secondary">EdTech</Badge>
              {/* TODO: Push to post details */}
              <Button>Details</Button>
            </footer>
          </div>
        ))}
      </section>
    </div>
  );
}
