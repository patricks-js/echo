import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Form from "next/form";

export function PostSearch() {
  return (
    <Form
      action="/"
      className="mx-auto max-w-sm"
    >
      <div className="flex items-center gap-1 rounded-xl border-2 px-4 py-1">
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
  );
}
