import { FiltersSidebar } from "@/components/filters-sidebar";
import { PostSearch } from "@/components/post-search";
import { Badge } from "@/components/ui/badge";
import { Clock, Eye } from "lucide-react";

export interface Article {
  title: string;
  short_description: string;
  quanty_of_views: number;
  minutes_read: number;
  tags: string[];
  author_username: string;
  published_at: string;
}

const getArticles = async () => {
  const res = await fetch("https://www.jsondataai.com/api/XjaahR9");

  const data = await res.json();

  return data as Article[];
};

export default async function Home() {
  const articles = await getArticles();

  return (
    <>
      <section className="space-y-6 border-b pb-16">
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
          {articles ? (
            articles.map((article) => (
              <li
                className="flex items-center justify-between gap-8"
                key={article.title}
              >
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="size-8 rounded-full bg-secondary" />
                    <div className="space-x-1">
                      <span className="font-medium">
                        {article.author_username}
                      </span>
                      <span className="align-middle">•</span>
                      <span className="text-muted-foreground text-sm">
                        {article.published_at}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl leading-normal tracking-tight">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {article.short_description}
                    </p>
                  </div>
                  <footer className="mt-4 flex items-center justify-between">
                    <div className="space-x-4">
                      <span className="inline-flex items-center gap-2 text-sm">
                        <Clock className="size-3" /> {article.minutes_read} min
                        read
                      </span>
                      <span className="inline-flex items-center gap-2 text-sm">
                        <Eye className="size-3" /> {article.quanty_of_views}{" "}
                        views
                      </span>
                    </div>
                    <ul className="flex items-center gap-2">
                      {article.tags.map((tag) => (
                        <li key={tag}>
                          <Badge variant="secondary">{tag}</Badge>
                        </li>
                      ))}
                    </ul>
                  </footer>
                </div>
                <div className="h-28 w-44 animate-pulse rounded-lg bg-secondary" />
              </li>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </ul>
        <FiltersSidebar />
      </section>
    </>
  );
}
