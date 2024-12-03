import { BlogCard } from "@/components/blog-card";
import { FiltersSidebar } from "@/components/filters-sidebar";
import { PostSearch } from "@/components/post-search";

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
        <PostSearch />
      </section>
      <section className="mt-10 grid grid-cols-[1fr_320px] gap-10">
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
        <FiltersSidebar />
      </section>
    </>
  );
}
