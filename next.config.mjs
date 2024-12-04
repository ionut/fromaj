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
      {
        protocol: "https",
        hostname: "tailwindui.com",
        pathname: "/plus/img/ecommerce-images/*",
        port: "",
      },
    ],
  },
};

export default nextConfig;
