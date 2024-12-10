import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

type AccountSidebarProps = {
  user: {
    username: string;
    email: string;
    image: string | null;
    bio: string | null;
  };
};

export const AccountSidebar = ({ user }: AccountSidebarProps) => {
  return (
    <aside className="max-w-xs space-y-4">
      <Avatar className="mx-auto size-36 rounded-full border-2">
        <AvatarFallback>
          {user.username.charAt(0).toLocaleUpperCase()}
        </AvatarFallback>
        <AvatarImage
          src={user.image ?? "https://github.com/patricks-js.png"}
          alt={user.username}
        />
      </Avatar>
      <div className="text-center">
        <h4 className="font-semibold text-xl tracking-tight">
          {user.username}
        </h4>
        {/* TODO: headline? */}
        <span className="text-muted-foreground">{user.email}</span>
      </div>
      {/* TODO: Followers section */}
      <Separator />
      <footer>
        <p className="text-center text-muted-foreground leading-relaxed">
          {user.bio}
        </p>
        {/* TODO: Social medias? */}
      </footer>
    </aside>
  );
};
