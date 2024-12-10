"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { notFound } from "next/navigation";
import { useGetProfile } from "../hooks/use-get-profile";

type ProfileSidebarProps = {
  username: string;
};

export const ProfileSidebar = ({ username }: ProfileSidebarProps) => {
  const { data, isLoading, error } = useGetProfile(username);

  if (isLoading) return <ProfileSidebarSkeleton />;

  if (error) notFound();

  return (
    <aside className="max-w-xs space-y-4">
      <Avatar className="mx-auto size-36 rounded-full border-2">
        <AvatarFallback>
          {data?.username?.charAt(0).toUpperCase() ?? "U"}
        </AvatarFallback>
        <AvatarImage
          src={data?.image ?? "https://github.com/patricks-js.png"}
          alt={data?.username ?? "User"}
        />
      </Avatar>
      <div className="text-center">
        <h4 className="font-semibold text-xl tracking-tight">
          {data?.username ?? "User"}
        </h4>
        <span className="text-muted-foreground">
          {data?.email ?? "E-mail unavailable"}
        </span>
      </div>
      <Separator />
      <footer className="space-y-4">
        <p className="text-center text-muted-foreground leading-relaxed">
          {data?.bio ?? "Bio unavailable"}
        </p>
        <Button className="w-full">Follow</Button>
      </footer>
    </aside>
  );
};

const ProfileSidebarSkeleton = () => {
  return (
    <aside className="max-w-xs space-y-4">
      <Skeleton className="mx-auto size-36 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="mx-auto h-5 w-36" />
        <Skeleton className="mx-auto h-4 w-32" />
      </div>
      <Separator />
      <footer className="space-y-4">
        <div className="flex flex-col items-start gap-2">
          <Skeleton className="h-4 w-full rounded-md" />
          <Skeleton className="h-4 w-36" />
        </div>
        <Skeleton className="h-9 w-full" />
      </footer>
    </aside>
  );
};
