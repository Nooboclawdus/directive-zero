import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const regles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/regles' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    description: z.string().optional(),
  }),
});

const univers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/univers' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    description: z.string().optional(),
  }),
});

const recits = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recits' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    description: z.string().optional(),
    type: z.string().optional(),
    readingTime: z.string().optional(),
  }),
});

export const collections = { regles, univers, recits };
