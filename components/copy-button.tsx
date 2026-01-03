"use client";

import { useState } from "react";

export default function CopyButton() {

  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <button
      className="flex flex-row items-center gap-2 px-4 py-2 hover:cursor-pointer rounded-none border-2"
      onClick={() => {
        handleCopy();
      }}
    >
      {
        isCopied ? "Copied!" : "Blog link"
      }
    </button>
  );
}
