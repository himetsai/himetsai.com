import { fetchPosts } from "../../lib/fetchData/fetchPosts";
import ShitpostPage from "../../components/ShitpostPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "hime's shitposts",
  description: "Ray Tsai's shitposts",
  openGraph: {
    title: "hime's shitpost",
    siteName: "himetsai",
    images: [
      { url: "/preview.png", width: 1200, height: 630, type: "image/png" },
    ],
  },
  twitter: {
    title: "hime's shitpost",
    description: "Ray Tsai's shitposts",
    card: "summary_large_image",
    images: [
      { url: "/preview.png", width: 1200, height: 630, type: "image/png" },
    ],
  },
};

export const viewport = "width=device-width, initial-scale=1";

export const revalidate = 10;

export default async function Shitpost() {
  const posts: Post[] = await fetchPosts();
  return <ShitpostPage posts={posts} />;
}
