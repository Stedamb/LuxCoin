export default function sanityLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  // If it's a Sanity image, we handle resizing and optimization via Sanity CDN
  if (src.includes("cdn.sanity.io")) {
    const url = new URL(src);
    url.searchParams.set("w", width.toString());
    url.searchParams.set("q", (quality || 75).toString());
    url.searchParams.set("auto", "format");
    return url.toString();
  }

  // For local images (in public folder), we return as is.
  // Vercel will not optimize these if a custom loader is defined.
  // This is the most cost-effective way as it bypasses Vercel Image Optimization credits.
  return src;
}
