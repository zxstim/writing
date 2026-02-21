"use client";

import { useState } from "react";
import { blog } from "@/lib/source";
import BlogCard from "@/components/blog-card";

export default function BlogList() {
  const posts = blog.getPages();
  const viPosts = posts.filter((post) => post.data.language === "vi");
  const enPosts = posts.filter((post) => post.data.language === "en");
  // const [selectedLanguage, setSelectedLanguage] = useState<string>("all");

  // Filter posts based on selected language
  // const filteredPosts =
  //   selectedLanguage === "all"
  //     ? posts
  //     : posts.filter((post) => post.data.language === selectedLanguage);

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
      {/* <div className="flex flex-row gap-4">
        <button
          className={`hover:cursor-pointer ${
            selectedLanguage === "all" ? "underline underline-offset-4" : ""
          }`}
          onClick={() => setSelectedLanguage("all")}
        >
          All
        </button>
        <button
          className={`hover:cursor-pointer ${
            selectedLanguage === "en" ? "underline underline-offset-4" : ""
          }`}
          onClick={() => setSelectedLanguage("en")}
        >
          English
        </button>
        <button
          className={`hover:cursor-pointer ${
            selectedLanguage === "vi" ? "underline underline-offset-4" : ""
          }`}
          onClick={() => setSelectedLanguage("vi")}
        >
          Tiếng Việt
        </button>
      </div> */}
      <div className="flex flex-col">
        <h2 className="font-bold bg-fd-primary text-fd-secondary px-2 w-fit rounded-none">
          English
        </h2>
        <div className="grid grid-cols-1 border-2 border-fd-muted-foreground divide-y-2 divide-fd-muted-foreground">
          {enPosts
            .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
            .map((post) => (
              <BlogCard key={post.url} post={post} />
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
              <BlogCard key={post.url} post={post} />
            ))}
        </div>
      </div>
    </div>
  );
}
