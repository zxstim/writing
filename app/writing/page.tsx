import { blog } from "@/lib/source";
import BlogCard from "@/components/blog-card";

export default function HomePage() {
  const posts = blog.getPages();
  
  return (
    <div className="flex flex-col gap-2 px-8 md:px-16 lg:px-16">
      <div className="flex flex-col items-center md:items-start lg:items-start justify-center h-[330px]">
        <p className="px-4 py-2 mb-16 text-sm border-2 rounded-full border-secondary">
          Welcome to my writing space!
        </p>
        <h1 className="text-center text-3xl md:text-left md:text-5xl lg:text-left lg:text-7xl font-bold lg:w-2/3">
          ZxStim&apos;s Writings
        </h1>
        {/* <div className="flex flex-row gap-4 mt-16">
          <Link
            href="/writing/blog"
            className="px-8 py-3 dark:bg-[#ffffff] bg-[#000000] dark:text-[#000000] text-[#ffffff] rounded-full w-fit lg:text-3xl hover:dark:bg-[#ffffff]/80 hover:bg-[#000000]/80"
          >
            Blog
          </Link>
          <Link
            href="/writing/docs"
            className="px-8 py-3 dark:bg-gray-800 bg-gray-300 dark:text-white text-black rounded-full w-fit lg:text-3xl hover:dark:bg-gray-700 hover:bg-gray-400"
          >
            Docs
          </Link>
        </div> */}
      </div>
      <div className="flex flex-col gap-2">
      <h1 className="text-4xl font-bold mb-8">Latest blog posts</h1>
      <div className="flex flex-row gap-2">
        <button>
          All
        </button>
        <button>
          English
        </button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime()).map((post) => (
          <BlogCard key={post.url} post={post} />
        ))}
      </div>
      </div>
    </div>
  );
}