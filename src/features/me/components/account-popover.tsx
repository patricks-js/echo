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
import { AccountAvatar } from "./account-avatar";

export const AccountPopover = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <AccountAvatar
          username="patrick"
          image="https://github.com/patricks-js.png"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-48"
        align="end"
      >
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            {/* TODO: get dynamic username */}
            <Link href="/profiles/patrick">Profile</Link>
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
            <LogOut className="" />
            <span>Log out</span>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
