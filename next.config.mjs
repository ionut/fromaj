/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "powerful-bouquet-e112157a62.media.strapiapp.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
