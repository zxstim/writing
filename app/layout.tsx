import { RootProvider } from 'fumadocs-ui/provider/next';
import type { Metadata } from "next";
import './global.css';
import { JetBrains_Mono } from "next/font/google";


const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZxStim",
  description: "Building and shipping software products",
  metadataBase: new URL("https://www.zxstim.com"),
  openGraph: {
    title: "ZxStim",
    description: "Building and shipping software products",
    url: "https://www.zxstim.com",
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
    title: "ZxStim",
    description: "Building and shipping software products",
    creator: "@zxstim",
    images: ["/zxstim-tbn.png"],
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={jetBrainsMono.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
