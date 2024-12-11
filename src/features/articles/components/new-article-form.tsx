"use client";

import { Button } from "@/components/ui/button";
import { TagsInput } from "@/components/ui/extension/tags-input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { newArticleSchema } from "../schemas";

type FormValues = z.infer<typeof newArticleSchema>;

export const NewArticleForm = () => {
  const router = useRouter();
  const form = useForm<FormValues>({
    resolver: zodResolver(newArticleSchema),
    defaultValues: {
      title: "",
      description: "",
      content: "",
      tags: [],
    },
  });

  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  const onCancel = () => {
    form.reset();
    router.push("/");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tags relacionadas</FormLabel>
              <FormControl>
                <TagsInput
                  value={field.value}
                  onValueChange={field.onChange}
                  placeholder="Enter your tags"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <footer className="flex flex-row-reverse items-center gap-4">
          <Button
            type="submit"
            size="lg"
          >
            Publicar
          </Button>
          <Button
            type="button"
            onClick={onCancel}
            variant="secondary"
            size="lg"
          >
            Cancelar
          </Button>
        </footer>
      </form>
    </Form>
  );
};
