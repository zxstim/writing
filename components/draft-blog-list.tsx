"use client";

import { blog } from "@/lib/source";
import DraftBlogCard from "@/components/draft-blog-card";

export default function DraftBlogList() {
  const posts = blog.getPages();
  const draftPosts = posts.filter((post) => post.data.status === "draft");
  const viPosts = draftPosts.filter((post) => post.data.language === "vi");
  const enPosts = draftPosts.filter((post) => post.data.language === "en");

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
      <div className="flex flex-col">
        <h2 className="font-bold bg-fd-primary text-fd-secondary px-2 w-fit rounded-none">
          English
        </h2>
        <div className="grid grid-cols-1 border-2 border-fd-muted-foreground divide-y-2 divide-fd-muted-foreground">
          {enPosts
            .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
            .map((post) => (
              <DraftBlogCard key={post.url} post={post} />
            ))}
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="font-bold bg-fd-primary text-fd-secondary px-2 w-fit rounded-none">
          Tiếng Việt
        </h2>
        <div className="grid grid-cols-1 border-2 border-fd-muted-foreground divide-y-2 divide-fd-muted-foreground">
          {viPosts
            .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
            .map((post) => (
              <DraftBlogCard key={post.url} post={post} />
            ))}
        </div>
      </div>
    </div>
  );
}
