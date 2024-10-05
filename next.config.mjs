/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.fromaj.ro",
        port: "",
      },
    ],
  },
};

export default nextConfig;
