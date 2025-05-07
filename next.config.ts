import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com", // ✅ Added Google image domain
    ],
  },
};

export default nextConfig;