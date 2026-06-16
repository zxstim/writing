import { RootProvider } from "fumadocs-ui/provider/next";
import Script from "next/script";
import type { Metadata } from "next";
import "./global.css";
import { JetBrains_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZxStim's Writings",
  description: "A collection of my thoughts",
  metadataBase: new URL("https://writing.zxstim.com"),
  openGraph: {
    title: "ZxStim's Writings",
    description: "A collection of my thoughts",
    url: "https://writing.zxstim.com",
    siteName: "ZxStim",
    images: [
      {
        url: "/zxstim-tbn.png",
        width: 1200,
        height: 630,
        alt: "og-image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZxStim's Writings",
    description: "A collection of my thoughts",
    creator: "@zxstim",
    images: ["/zxstim-tbn.png"],
  },
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={jetBrainsMono.className}
      suppressHydrationWarning
    >
      <Script
        defer
        src="https://analytics.zxstim.com/script.js"
        data-website-id="987056dc-b98e-43e2-91fe-4bab190d562d"
      />
      <body className="flex flex-col min-h-screen pb-12">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
