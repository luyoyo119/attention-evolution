import { defineCollection, z } from 'astro:content';

const articleCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    series: z.enum(['decode', 'radar', 'deepread', 'evolution', 'workshop', 'standalone']),
    seriesLabel: z.string(),
    seriesNumber: z.number().optional(),
    date: z.date(),
    description: z.string(),
    excerpt: z.string(),
    updated: z.date().optional(),
    part: z.string().optional(),
    partSlug: z.string().optional(),
    tags: z.array(z.string()).default([]),
    readingTime: z.number().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    coverImage: z.string().optional(),
    cogNav: z.object({
      summary: z.string(),
      related: z.array(z.object({
        title: z.string(),
        slug: z.string(),
      })),
    }).optional(),
    avoidanceList: z.array(z.string()).optional(),
  }),
});

export const collections = {
  decode: articleCollection,
  radar: articleCollection,
  deepread: articleCollection,
  evolution: articleCollection,
  workshop: articleCollection,
  standalone: articleCollection,
};
