import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    experimental: {
        serverActions: {
            allowedOrigins: ["localhost:3000", "improved-parakeet-j9qqjx5pgjqcj7jx-3000.app.github.dev"],
        },
    },
};

export default nextConfig;
