import { BlogCard } from "@/components/blog-card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Form from "next/form";

export default function Home() {
  return (
    <>
      <section className="space-y-6 border-b py-20">
        <header className="mx-auto text-center">
          <h1 className="font-bold text-6xl leading-snug tracking-tight">
            Echo
          </h1>
          <p className="text-muted-foreground">
            Share your thoughts, ideas, and inspirations with the world.
          </p>
        </header>
        <Form
          action="/"
          className="mx-auto max-w-sm"
        >
          <div className="flex items-center gap-1 rounded-lg border-2 px-4 py-1">
            <button type="submit">
              <Search className="size-5 text-muted-foreground" />
            </button>
            <Input
              name="search"
              placeholder="Search..."
              className="flex-1 border-none shadow-none outline-0 focus-visible:ring-0"
            />
          </div>
        </Form>
      </section>
      <section className="mx-auto flex max-w-screen-xl flex-row-reverse items-start gap-12 px-4 py-10 md:px-8">
        <aside className="max-w-xs">
          <div>
            <h4>Choose topics</h4>
            <div className="flex flex-wrap gap-1">
              <Badge>nextjs</Badge>
              <Badge>nextjs</Badge>
              <Badge>react</Badge>
              <Badge>tailwind</Badge>
              <Badge>tips</Badge>
              <Badge>hono</Badge>
              <Badge>web</Badge>
              <Badge>vite</Badge>
            </div>
          </div>
        </aside>
        <ul className="flex-1 space-y-14">
          <li>
            <BlogCard />
          </li>
          <li>
            <BlogCard />
          </li>
          <li>
            <BlogCard />
          </li>
          <li>
            <BlogCard />
          </li>
          <li>
            <BlogCard />
          </li>
        </ul>
      </section>
    </>
  );
}
