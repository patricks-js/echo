import { SignInForm } from "@/components/forms/sign-in-form";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="relative flex h-full w-full max-w-screen-xl flex-col items-center justify-center gap-8">
      <Button
        variant="ghost"
        asChild
        className="absolute top-10 left-10"
      >
        <Link href="/">
          <ChevronLeft className="size-4" />
          Back
        </Link>
      </Button>
      <header className="text-center">
        <h2 className="font-semibold text-3xl leading-normal tracking-tight">
          Welcome back! 👋
        </h2>
        <p className="max-w-sm text-muted-foreground">
          Nice to see you again. Login to discover a world of ideas and
          knowledge.
        </p>
      </header>
      <SignInForm />
      <footer className="text-muted-foreground text-sm">
        Don't have an account?{" "}
        <Link
          href="/sign-up"
          className="hover:underline"
        >
          Register now
        </Link>
      </footer>
    </div>
  );
}
