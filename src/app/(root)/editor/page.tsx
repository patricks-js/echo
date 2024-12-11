import { NewArticleForm } from "@/features/articles/components/new-article-form";

export default function EditorPage() {
  return (
    <div className="space-y-8">
      <h2 className="font-bold text-3xl leading-normal tracking-tight">
        Publicar novo conteúdo
      </h2>
      <NewArticleForm />
    </div>
  );
}
