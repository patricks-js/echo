import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type AccountAvatarProps = {
  username: string;
  image: string;
};

export const AccountAvatar = ({ username, image }: AccountAvatarProps) => {
  return (
    <Avatar className="size-9">
      <AvatarFallback className="text-xs">
        {username.slice(0, 2).toUpperCase() ?? "CN"}
      </AvatarFallback>
      <AvatarImage
        src={image}
        alt={username}
      />
    </Avatar>
  );
};
