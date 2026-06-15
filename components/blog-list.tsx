import { blog, getTweets } from "@/lib/source";
import BlogCard from "@/components/blog-card";
import TweetCard from "@/components/tweet-card";
import BlogListTabs from "@/components/blog-list-tabs";

export default function BlogList() {
  const posts = blog.getPages();
  const publishedPosts = posts.filter(
    (post) => post.data.status === "published",
  );
  const viPosts = publishedPosts
    .filter((post) => post.data.language === "vi")
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  const enPosts = publishedPosts
    .filter((post) => post.data.language === "en")
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  const tweets = getTweets();

  return (
    <BlogListTabs
      tweets={
        <div className="flex flex-col gap-4">
          {tweets.map((tweet) => (
            <TweetCard key={tweet.info.path} tweet={tweet} />
          ))}
        </div>
      }
      english={
        <div className="grid grid-cols-1 border-2 border-fd-muted-foreground divide-y-2 divide-fd-muted-foreground">
          {enPosts.map((post) => (
            <BlogCard key={post.url} post={post} />
          ))}
        </div>
      }
      vietnamese={
        <div className="grid grid-cols-1 border-2 border-fd-muted-foreground divide-y-2 divide-fd-muted-foreground">
          {viPosts.map((post) => (
            <BlogCard key={post.url} post={post} />
          ))}
        </div>
      }
    />
  );
}
