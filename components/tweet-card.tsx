import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { getMDXComponents } from "@/mdx-components";
import type { TweetEntry } from "@/lib/source";

// Official X wordmark.
function XLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// Link to the post on X: explicit `url` frontmatter wins; otherwise derive it
// from the filename when it is the numeric tweet id (the convention here).
function tweetUrl(tweet: TweetEntry): string | undefined {
  if (tweet.url) return tweet.url;
  const id = tweet.info.path.replace(/^.*\//, "").replace(/\.mdx$/, "");
  return /^\d+$/.test(id)
    ? `https://x.com/${tweet.handle}/status/${id}`
    : undefined;
}

/**
 * Renders a hand-written `tweet` content entry styled to look like an X post.
 * The post text is the MDX body; the header identity/date come from frontmatter.
 */
export default function TweetCard({ tweet }: { tweet: TweetEntry }) {
  const Body = tweet.body;
  const url = tweetUrl(tweet);
  return (
    <div className="flex flex-col gap-3 border-2 border-fd-muted-foreground p-4 rounded-none">
      <div className="flex flex-row items-center gap-2">
        <Image
          src="/zxstim-mini.png"
          alt={tweet.author}
          width={44}
          height={44}
          className="rounded-full"
        />
        <div className="flex flex-col leading-tight">
          <div className="flex flex-row items-center gap-1">
            <span className="font-semibold">{tweet.author}</span>
            <BadgeCheck className="w-4 h-4 fill-blue-400 stroke-fd-secondary" />
          </div>
          <span className="text-sm text-fd-muted-foreground">@{tweet.handle}</span>
        </div>
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View on X"
            className="ml-auto text-fd-muted-foreground transition-colors hover:text-fd-foreground"
          >
            <XLogo className="w-5 h-5" />
          </a>
        ) : (
          <XLogo className="ml-auto w-5 h-5 text-fd-muted-foreground" />
        )}
      </div>
      <div className="prose min-w-0 text-[15px]">
        <Body components={getMDXComponents()} />
      </div>
      <time className="text-sm text-fd-muted-foreground">
        {tweet.date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </time>
    </div>
  );
}
