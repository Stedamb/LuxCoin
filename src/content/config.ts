import { defineCollection, z } from 'astro:content';

// Define the schema for the coins collection
const coinsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.number(),
    name: z.string(),
    period: z.string(),
    price: z.number(),
    image: z.string(),
  }),
});

// Define the schema for the reviews collection
const reviewsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.number(),
    name: z.string(),
    location: z.string(),
    rating: z.number(),
    date: z.string(),
  }),
});

// Export the collections object
export const collections = {
  'coins': coinsCollection,
  'reviews': reviewsCollection,
};
