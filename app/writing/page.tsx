import BlogList from "@/components/blog-list";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-2 px-4 md:px-16 lg:px-16 pb-12">
      <div className="flex flex-col items-center md:items-start lg:items-start justify-center h-80">
        <p className="px-4 py-2 mb-16 text-sm border-2 rounded-none border-fd-secondary">
          Welcome to my writing space!
        </p>
        <h1 className="leading-snug text-left text-3xl md:text-5xl lg:text-7xl font-bold">
          A collection of my thoughts
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
      <BlogList />
    </div>
  );
}
