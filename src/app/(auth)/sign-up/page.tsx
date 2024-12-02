import { SignUpForm } from "@/components/forms/sign-up-form";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="relative flex h-full w-full max-w-screen-xl flex-col items-center justify-center gap-8">
      <Button
        variant="ghost"
        asChild
        className="absolute top-10 left-10"
      >
        <Link href="/sign-in">
          <ChevronLeft className="size-4" />
          Back
        </Link>
      </Button>
      <header className="text-center">
        <h2 className="font-semibold text-3xl leading-normal tracking-tight">
          Welcome to Echo
        </h2>
        <p className="max-w-sm text-muted-foreground">
          Create your account and discover a world of ideas and knowledge.
        </p>
      </header>
      <SignUpForm />
    </div>
  );
}
