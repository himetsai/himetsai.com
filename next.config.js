/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/oodball",
        destination: "/422",
        permanent: false,
      },
      {
        source: "/youtube",
        destination: "https://www.youtube.com/@boogerman919",
        permanent: true,
      },
      {
        source: "/ratings",
        destination:
          "https://docs.google.com/spreadsheets/d/1-abD9VOIdw7rFbcEGPZMrkQViWG8E48fF4J45Pku0gA/edit?usp=sharing",
        permanent: true,
      },
      {
        source: "/sad",
        destination: "https://youtu.be/tYzMYcUty6s",
        permanent: false,
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
