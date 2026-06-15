# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

This project uses **Bun** (`bun.lock` present). Use `bun`/`bunx`, not npm.

- `bun run dev` — dev server on **port 3098** (`http://localhost:3098`)
- `bun run build` — production build
- `bun run start` — serve the production build
- `bun run lint` — ESLint (`eslint-config-next`)
- `bun run types:check` — regenerates MDX/Next types then runs `tsc --noEmit`. Use this for a full type check; plain `tsc` may fail if generated types are stale.

There is no test suite.

`bun install` triggers `postinstall` → `fumadocs-mdx`, which generates the `.source/` directory (gitignored). Content type definitions live there, so if imports from `fumadocs-mdx:collections/*` break, regenerate via `bun run types:check` or `bunx fumadocs-mdx`.

## Architecture

A [Fumadocs](https://fumadocs.dev) + Next.js 16 (App Router, React 19) site. It is primarily a **blog** (~79 MDX posts under `content/blog`, mostly Vietnamese crypto/tech writing) with a secondary, near-boilerplate **docs** section (`content/docs`).

### Content pipeline

`source.config.ts` defines two fumadocs-mdx collections compiled into `.source/`:
- `docs` (`content/docs`) — standard fumadocs schema.
- `blogPosts` (`content/blog`) — `frontmatterSchema` **extended** with required `author`, `date`, `language` (`"en"|"vi"`), `status` (`"draft"|"published"`) and optional `thumbnail`. These fields are a hard contract: a post missing any required field fails the build via Zod.

`lib/source.ts` wraps these into two loaders consumed everywhere:
- `source` — docs, baseUrl `/docs`.
- `blog` — blog, baseUrl `/blog`. `post.data` carries the typed frontmatter; `post.url` is the canonical `/blog/<slug>`.

### Draft vs. published

`status` is **not** access control — it is a render-time filter:
- `/` (home, `components/blog-list.tsx`) shows `status === "published"`.
- `/draft/blog` (`components/draft-blog-list.tsx`) shows `status === "draft"`.

Both split posts into English / Tiếng Việt columns by `language` and sort by `date` descending. Note `app/blog/[slug]/generateStaticParams` builds pages for **all** posts regardless of status, so a draft is still reachable at its direct URL.

### Routes

- `app/(home)` — landing page with the ASCII banner + published `BlogList`.
- `app/blog/[slug]` and `app/draft/blog/[slug]` — individual post pages (author header, thumbnail, `InlineTOC`, MDX body).
- `app/docs/[[...slug]]` — fumadocs docs pages.
- `app/api/search/route.ts` — search endpoint; indexes **only the docs `source`** (English), not the blog.
- `app/og/docs/[...slug]/route.tsx` — dynamically generated OG images for **docs** pages.
- `app/llms-full.txt/route.ts` — concatenates **docs** pages into one text response for LLMs.

### Images & metadata

- Blog thumbnails are static files in `public/blog-images/thumbnails/`, referenced by the `thumbnail` frontmatter filename (e.g. `thumbnail: my-post.png`). They render in the post page and as the post's social-card image.
- `app/layout.tsx` sets `metadataBase: https://www.zxstim.com` plus site-wide OG/Twitter defaults. Per-post `generateMetadata` in `app/blog/[slug]/page.tsx` overrides the OG/Twitter image with the post thumbnail when present (relative URLs resolve against `metadataBase`); posts without a thumbnail inherit the site default.

### Conventions

- Path aliases: `@/*` → repo root; `fumadocs-mdx:collections/*` → `.source/*`.
- MDX rendering goes through `mdx-components.tsx`, which swaps `img` for fumadocs `ImageZoom`.
- Styling is Tailwind CSS v4 (config via `postcss.config.mjs` + `app/global.css`); the UI deliberately uses square corners (`rounded-none`) and fumadocs theme tokens (`fd-*`).

## Adding a blog post

Create `content/blog/<slug>.mdx` with full frontmatter:

```yaml
---
title: ...
author: zxstim
date: 2026-02-11      # parsed as a Date
language: vi          # "en" | "vi"
thumbnail: <slug>.png # optional; place file in public/blog-images/thumbnails/
status: published     # "draft" hides it from the homepage
---
```

The slug is the filename. Type definitions regenerate on `dev`/`build`/`types:check`.
