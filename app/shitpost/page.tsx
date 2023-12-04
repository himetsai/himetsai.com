import { fetchPosts } from "../../lib/fetchData/fetchPosts";
import ShitpostPage from "../../components/ShitpostPage";
import { Metadata } from "next";
import Head from "next/head";

// export const metadata: Metadata = {
//   title: "hime's shitposts",
//   description: "Ray Tsai's shitposts",
//   openGraph: {
//     title: "hime's shitpost",
//     siteName: "himetsai",
//     images: [
//       { url: "/preview.png", width: 1200, height: 630, type: "image/png" },
//     ],
//   },
//   twitter: {
//     title: "hime's shitpost",
//     description: "Ray Tsai's shitposts",
//     card: "summary_large_image",
//     images: [
//       { url: "/preview.png", width: 1200, height: 630, type: "image/png" },
//     ],
//   },
// };

// export const viewport = "width=device-width, initial-scale=1";

export const revalidate = 10;

export default async function Shitpost() {
  const posts: Post[] = await fetchPosts();
  return (
    <>
      <Head>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <title>hime's shitposts</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Ray Tsai's shitposts" key="desc" />
        <meta property="og:site_name" content="himetsai" />
        <meta property="og:type" content="shitposts page" />
        <meta property="og:title" content="hime's shitpost" />
        <meta property="og:image" content="/preview.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:title" content="hime's shitpost" />
        <meta name="twitter:description" content="Ray Tsai's shitposts" />
        <meta name="twitter:image" content="/preview.png" />
        <meta name="twitter:image:type" content="image/png" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <ShitpostPage posts={posts} />;
    </>
  );
}
