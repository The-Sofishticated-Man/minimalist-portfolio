import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "",
  assetPrefix: "",
  reactStrictMode: true,
  images: { unoptimized: true },
};

export default nextConfig;
