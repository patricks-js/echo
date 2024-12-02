import { SignInForm } from "@/components/forms/sign-in-form";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="flex flex-col items-center gap-6">
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
