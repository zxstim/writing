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
      key={post.url}
      href={post.url}
      className="block bg-fd-secondary rounded-none shadow-md overflow-hidden p-6"
    >
      <h2 className="text-xl font-semibold mb-2">{post.data.title}</h2>
      <p className="mb-4 text-sm text-fd-muted-foreground">
        {post.data.language === "vi" ? "Tiếng Việt" : "English"}
      </p>
      <p className="mb-4 text-sm text-fd-muted-foreground">
        {post.data.date.toLocaleDateString()}
      </p>
    </Link>
  );
}
