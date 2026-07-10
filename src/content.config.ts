import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articles = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/blog'
  }),
  schema: z.object({
    silo: z.enum([
      'meta-ads',
      'google-ads',
      'tiktok-ads',
      'appeals-compliance',
      'account-operations',
      'agency-ad-accounts'
    ]),
    topic: z.string(),
    title: z.string(),
    description: z.string().min(100).max(165),
    overview: z.string(),
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date()
  })
});

export const collections = { articles };
