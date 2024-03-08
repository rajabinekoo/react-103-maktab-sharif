/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
  },
  env: {
    mongodb_url: "mongodb://127.0.0.1:27017/test",
  },
};

export default nextConfig;
