import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid w-full place-items-center">
      <h2 className="font-bold text-3xl leading-loose tracking-tight">
        Profile Not Found
      </h2>
      <p className="mb-2 text-muted-foreground">
        We could not find the profile of this user
      </p>
      <Button
        variant="link"
        asChild
      >
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
