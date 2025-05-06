import { glob } from "astro/loaders";

import { z, defineCollection } from "astro:content";

// Define a `loader` and `schema` for each collection
// Photos, Projects, GS etc
const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.string(), // z.date(),
    tags: z.array(z.string()).optional(),
    // updated: z.string(),
    // created: z.string(),
    // pubDate: z.date(),
    // description: z.string(),
    // author: z.string(),
    // image: z.object({
    //   url: z.string(),
    //   alt: z.string(),
    // }),
  }),
});

export const collections = { blog };
