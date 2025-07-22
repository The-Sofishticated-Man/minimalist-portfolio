import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/minimalist-portfolio",
  assetPrefix: "/minimalist-portfolio/",
  reactStrictMode: true,
  images: { unoptimized: true },
};

export default nextConfig;
