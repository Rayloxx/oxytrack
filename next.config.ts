import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  experimental: {
    optimizePackageImports: [
      "@react-three/fiber",
      "@react-three/drei",
      "framer-motion",
      "gsap",
    ],
  },

  images: {
    formats: ["image/avif", "image/webp"],
  },

  poweredByHeader: false,

  compress: true,
};

export default nextConfig;
