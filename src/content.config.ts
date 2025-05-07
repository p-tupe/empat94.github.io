import { glob } from "astro/loaders";

import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.string(), // z.date(),
    tags: z.array(z.string()).optional(),
    // updated: z.string(),
    // created: z.string(),
    // description: z.string(),
    // author: z.string(),
    // image: z.object({
    //   url: z.string(),
    //   alt: z.string(),
    // }),
  }),
});

const gs = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/gs" }),
  schema: z.object({
    title: z.string(),
    part: z.number(),
  }),
});

export const collections = { blog, gs };
