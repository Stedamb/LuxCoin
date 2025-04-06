import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Coin {
  id: number;
  name: string;
  period: string;
  description: string;
  price: number;
  image: string;
  slug: string;
}

const coinsDirectory = path.join(process.cwd(), 'src/content/coins');

export function getAllCoins(): Coin[] {
  // Get file names under /content/coins
  const fileNames = fs.readdirSync(coinsDirectory);
  
  const allCoinsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get slug
    const slug = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(coinsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the slug
    return {
      slug,
      ...(matterResult.data as Omit<Coin, 'slug'>),
      description: matterResult.content.trim(),
    };
  });

  // Sort coins by id
  return allCoinsData.sort((a, b) => a.id - b.id);
}

export function getCoinBySlug(slug: string): Coin | undefined {
  const fullPath = path.join(coinsDirectory, `${slug}.md`);
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      ...(matterResult.data as Omit<Coin, 'slug'>),
      description: matterResult.content.trim(),
    };
  } catch (error) {
    return undefined;
  }
}
