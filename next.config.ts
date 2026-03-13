import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Cache optimized images for 31 days to reduce repeated transformations
    minimumCacheTTL: 2678400,
    // Only generate WebP (not avif) — halves the number of transformations per image
    formats: ["image/webp"],
    // Sanity CDN is the only remote image host
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
