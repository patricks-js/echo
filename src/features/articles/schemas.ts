import { insertArticleSchema } from "@/db/schema";

export const newArticleSchema = insertArticleSchema.pick({
  title: true,
  description: true,
  content: true,
  tags: true,
});
