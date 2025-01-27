/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1338",
      },
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
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
