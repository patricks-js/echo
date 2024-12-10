"use client";

import { AccountSidebar } from "@/features/profile/components/account-sidebar";
import { useGetProfile } from "@/features/profile/hooks/use-get-profile";
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
      <h2 className="border text-3xl">Posts</h2>
    </div>
  );
}
