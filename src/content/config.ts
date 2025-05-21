import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updateDate: z.coerce.date().optional(),
    category: z.string(),
    author: z.object({
      name: z.string(),
      title: z.string(),
      image: z.string(),
    }),
  }),
});

const positions = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    remote: z.string(),
    type: z.string(),
    pubDate: z.coerce.date(),
  }),
});

export { blog, positions };
