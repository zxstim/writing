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
    <div className="flex flex-col gap-8">
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
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold border-b border-gray-200 pb-2">English</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {enPosts
            .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
            .map((post) => (
              <BlogCard key={post.url} post={post} />
            ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold border-b border-gray-200 pb-2">Tiếng Việt</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
