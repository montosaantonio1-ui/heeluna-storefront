/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.shopify.com" },
      { protocol: "https", hostname: "*.myshopify.com" },
      // Fallback while the source images still live on the supplier CDN,
      // before the product photos are replaced with your own/Shopify-hosted ones.
      { protocol: "https", hostname: "sc04.alicdn.com" },
      { protocol: "http", hostname: "sc01.alicdn.com" },
    ],
  },
};

export default nextConfig;
