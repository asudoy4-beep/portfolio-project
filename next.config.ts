import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/portfolio-project",
  assetPrefix: "/portfolio-project/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
