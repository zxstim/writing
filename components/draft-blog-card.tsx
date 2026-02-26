import Link from "next/link";
import { blog } from "@/lib/source";
import { type InferPageType } from "fumadocs-core/source";

export default function BlogCard({
  post,
}: {
  post: InferPageType<typeof blog>;
}) {
  return (
    <Link
      key={`/draft/blog/${post.url.split("/").pop()}`}
      href={`/draft/blog/${post.url.split("/").pop()}`}
      className="flex flex-col gap-1 rounded-none overflow-hidden p-4 hover:bg-fd-accent"
    >
      <h2 className="text-xl font-semibold mb-2">{post.data.title}</h2>
      <div className="flex flex-row gap-1">
        <p className="text-sm text-fd-muted-foreground">
          {post.data.date.toLocaleDateString("en-CA", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          })}
        </p>
        <p className="text-fd-muted-foreground">·</p>
        <p className="text-sm text-fd-muted-foreground">
          {post.data.language === "vi" ? "Tiếng Việt" : "English"}
        </p>
      </div>
    </Link>
  );
}
