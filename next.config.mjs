import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: import.meta.dirname,
  experimental: {
    optimizePackageImports: ["lucide-react", "recharts"],
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
  async headers() {
    return [
      {
        source: "/api/grammar/content",
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=3600, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/api/content/:path*",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, s-maxage=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
