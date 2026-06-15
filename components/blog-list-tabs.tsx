"use client";

import { useState, type ReactNode } from "react";

type TabKey = "tweets" | "english" | "vietnamese";

/**
 * Responsive layout for the home lists.
 * - Desktop (md+): three columns side by side — Tweets, English, Tiếng Việt.
 * - Mobile: three buttons (default Tweets) that switch which single list shows.
 *
 * The three lists are server-rendered nodes passed in as props and kept mounted;
 * visibility is toggled with CSS so all content stays in the static HTML.
 */
export default function BlogListTabs({
  tweets,
  english,
  vietnamese,
}: {
  tweets: ReactNode;
  english: ReactNode;
  vietnamese: ReactNode;
}) {
  const [active, setActive] = useState<TabKey>("tweets");

  const tabs: { key: TabKey; label: string; node: ReactNode }[] = [
    { key: "tweets", label: "Tweets", node: tweets },
    { key: "english", label: "English", node: english },
    { key: "vietnamese", label: "Tiếng Việt", node: vietnamese },
  ];

  return (
    <div className="flex flex-col gap-4">
      {/* Mobile selector */}
      <div className="grid grid-cols-3 gap-2 md:hidden">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActive(tab.key)}
            aria-pressed={active === tab.key}
            className={`px-2 py-2 text-sm font-bold border-2 rounded-none transition-colors ${
              active === tab.key
                ? "bg-fd-primary text-fd-secondary border-fd-primary"
                : "border-fd-muted-foreground text-fd-muted-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Columns */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {tabs.map((tab) => (
          <div
            key={tab.key}
            className={`flex-col gap-4 md:flex ${
              active === tab.key ? "flex" : "hidden"
            }`}
          >
            <h2 className="hidden md:block font-bold bg-fd-primary text-fd-secondary px-2 w-fit rounded-none">
              {tab.label}
            </h2>
            {tab.node}
          </div>
        ))}
      </div>
    </div>
  );
}
