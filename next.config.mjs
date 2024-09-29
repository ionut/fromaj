/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
      },
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.STRAPI_URL,
        port: "",
      },
    ],
  },
  env: {
    STRAPI_URL: process.env.STRAPI_URL,
  },
};

export default nextConfig;
