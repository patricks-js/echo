import { Clock, Eye } from "lucide-react";
import { Badge } from "./ui/badge";

type AuthorProps = {
  name: string;
  image?: string;
};

type BlogCardProps = {
  publishedAt: Date;
  title: string;
  description: string;
  image?: string;
  viewsCount: number;
  minRead: number;
  tags: string[];
  author: AuthorProps;
};

export function BlogCard() {
  return (
    <div className="flex items-start justify-between">
      <div className="space-y-4">
        <Author />
        <div>
          <h3 className="font-bold text-xl leading-normal tracking-tight">
            Nesting a Button inside a Link
          </h3>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias
            nostrum asperiores.
          </p>
        </div>
        <footer className="mt-4 flex items-center justify-between">
          <div className="space-x-4">
            <span className="inline-flex items-center gap-2 text-sm">
              <Clock className="size-3" /> 4 min read
            </span>
            <span className="inline-flex items-center gap-2 text-sm">
              <Eye className="size-3" /> 1,504 views
            </span>
          </div>
          <ul className="flex items-center gap-2">
            <li>
              <Badge variant="secondary">Web</Badge>
            </li>
            <li>
              <Badge variant="secondary">React</Badge>
            </li>
          </ul>
        </footer>
      </div>
      <div className="h-28 w-44 rounded-lg bg-secondary" />
    </div>
  );
}

function Author() {
  return (
    <div className="flex items-center gap-2">
      <div className="size-8 rounded-full bg-secondary" />
      <div className="space-x-1">
        <span className="font-medium">Author Name</span>
        <span className="align-middle">•</span>
        <span className="text-muted-foreground text-sm">December 2, 2024</span>
      </div>
    </div>
  );
}
