CREATE INDEX "slug_idx" ON "articles" USING btree ("slug");--> statement-breakpoint
ALTER TABLE "articles" ADD CONSTRAINT "articles_slug_unique" UNIQUE("slug");