import {
  defineConfig,
  defineDocs,
  defineCollections,
  frontmatterSchema,
  metaSchema,
} from "fumadocs-mdx/config";
import { z } from "zod";

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.dev/docs/mdx/collections
export const docs = defineDocs({
  dir: "content/docs",
  docs: {
    schema: frontmatterSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

export const blogPosts = defineCollections({
  type: "doc",
  dir: "content/blog",
  // add required frontmatter properties
  schema: frontmatterSchema.extend({
    author: z.string(),
    date: z.date(),
    language: z.enum(["en", "vi"]),
    thumbnail: z.string().optional(),
    status: z.enum(["draft", "published"]),
  }),
});

// "tweet" content type — short posts written by hand and styled to look like an
// X / Twitter post. The MDX file body is the tweet text; frontmatter carries the
// display identity and date. Consumed directly (no routing) and rendered on the
// home timeline by `components/tweet-card.tsx`.
export const tweets = defineCollections({
  type: "doc",
  dir: "content/tweets",
  schema: z.object({
    author: z.string().default("ZxStim"),
    handle: z.string().default("zxstim"),
    date: z.date(),
    language: z.enum(["en", "vi"]).default("en"),
    // Optional explicit link to the post on X. If omitted and the filename is
    // the numeric tweet id, the link is derived as x.com/<handle>/status/<id>.
    url: z.string().optional(),
  }),
});

export default defineConfig({
  mdxOptions: {
    // MDX options
  },
});
