/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["localhost", "cdn.sanity.io", "cdn.simpleicons.org"],
  },
};

module.exports = nextConfig;
