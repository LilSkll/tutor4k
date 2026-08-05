import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: import.meta.dirname,
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
};

export default withBundleAnalyzer(nextConfig);
