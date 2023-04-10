/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/oodball",
        destination: "/422",
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["localhost", "cdn.sanity.io", "cdn.simpleicons.org"],
  },
};

module.exports = nextConfig;
