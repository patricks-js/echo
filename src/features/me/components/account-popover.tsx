"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { useGetAccount } from "../hooks/use-get-account";
import { AccountAvatar } from "./account-avatar";

export const AccountPopover = () => {
  const { data } = useGetAccount();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <AccountAvatar
          username={data?.username ?? ""}
          image={data?.image ?? ""}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-48"
        align="end"
      >
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            {/* TODO: get dynamic username */}
            <Link href={`/profile/${data?.username}`}>Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/settings">Settings</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Button
            variant="ghost"
            className="h-full w-full justify-start"
          >
            <LogOut />
            <span>Log out</span>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
