import { Clock, Eye } from "lucide-react";
import { Badge } from "./ui/badge";

export function BlogCard() {
  return (
    <div className="flex items-start justify-between">
      <div>
        <span className="mb-2 inline-block text-muted-foreground">
          December 2, 2024
        </span>
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
              <Badge>Web</Badge>
            </li>
            <li>
              <Badge>React</Badge>
            </li>
          </ul>
        </footer>
      </div>
      <div className="h-28 w-44 rounded-lg bg-secondary" />
    </div>
  );
}
