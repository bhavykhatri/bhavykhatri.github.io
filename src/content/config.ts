import { defineCollection, z } from 'astro:content';

const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    kind: z.enum(['poetry', 'essay']),
    tags: z.array(z.string()).default([]),
    excerpt: z.string().optional(),
    lang: z.enum(['en', 'hi']).default('en'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { writing };
