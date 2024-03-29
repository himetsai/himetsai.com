/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return links;
  },
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["localhost", "cdn.sanity.io", "cdn.simpleicons.org"],
  },
};

const links = [
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
    source: "/benson",
    destination: "https://youtu.be/tEjQV5KeTsI",
    permanent: false,
  },
  {
    source: "/code",
    destination: "https://github.com/himetsai/himetsai.com",
    permanent: true,
  },
  {
    source: "/classes",
    destination:
      "https://docs.google.com/spreadsheets/d/15ltOsAzq2ovoPDI_aYEtmuI9VoM3W5TinbQ1UwTtB8g/edit?usp=sharing",
    permanent: true,
  },
  {
    source: "/resume",
    destination:
      "https://docs.google.com/document/d/1Hhj37nuguQssM2X-eGh6tOY5DgZR4oe0IKrQ23EzHKc/edit?usp=sharing",
    permanent: true,
  },
  {
    source: "/cv",
    destination: "https://himetsai.com/cv.pdf",
    permanent: true,
  },
  {
    source: "/albert",
    destination:
      "https://r9-museum.acgn-stock.com/company/detail/tbne4qG4k2u2t4jAd",
    permanent: true,
  },
];

module.exports = nextConfig;
