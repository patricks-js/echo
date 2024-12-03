import { Badge } from "./ui/badge";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function FiltersSidebar() {
  return (
    <aside className="space-y-6">
      <Select>
        <SelectTrigger className="w-[320px] rounded-2xl p-6 text-base">
          <SelectValue placeholder="Switch view" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="following">Following</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="space-y-2">
        <h4 className="font-medium">Choose topics</h4>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">nextjs</Badge>
          <Badge variant="secondary">nextjs</Badge>
          <Badge variant="secondary">react</Badge>
          <Badge variant="secondary">tailwind</Badge>
          <Badge variant="secondary">tips</Badge>
          <Badge variant="secondary">hono</Badge>
          <Badge variant="secondary">web</Badge>
          <Badge variant="secondary">vite</Badge>
        </div>
      </div>
    </aside>
  );
}
