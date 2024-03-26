import React from "react";
import { fetchPageInfo } from "../lib/fetchData/fetchPageInfo";
import HomePage from "../components/HomePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "himetsai",
  description: "Ray Tsai's personal website",
  openGraph: {
    title: "himetsai",
    siteName: "himetsai",
    images: [
      { url: "/preview.png", width: 1200, height: 630, type: "image/png" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      { url: "/preview.png", width: 1200, height: 630, type: "image/png" },
    ],
  },
};

// export const viewport = "width=device-width, initial-scale=1";

export const revalidate = 10;

const Home = async () => {
  const pageInfo = await fetchPageInfo();
  return (
    <HomePage
      pageTitle={pageInfo.pageTitle}
      pageDescription={pageInfo.pageDescription}
      name={pageInfo.name}
      description={pageInfo.description}
      image={pageInfo.image}
      achievements={pageInfo.achievements}
      socials={pageInfo.socials}
    />
  );
};

export default Home;
