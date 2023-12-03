import React from "react";
import Head from "next/head";
import { fetchPosts } from "../../../lib/fetchData/fetchPosts";
import { fetchPost } from "../../../lib/fetchData/fetchPost";
import SideInfo from "../../../components/SideInfo";
import PostContent from "../../../components/PostContent";
import { urlFor } from "../../../lib/sanity.client";
import CommentSection from "../../../components/CommentSection";

type Props = {
  params: { slug: string };
};

export const revalidate = 60;

export default async function Post({ params }: Props) {
  const { slug } = params;
  const post: Post = await fetchPost(slug);

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={post.title} />
        <meta property="og:site_name" content="himetsai" />
        <meta property="og:type" content="shitpost" />
        <meta property="og:image" content={urlFor(post.mainImage).url()} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:image" content={urlFor(post.mainImage).url()} />
        <meta name="twitter:image:type" content="image/png" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div
        className="flex flex-col items-center justify-center px-5 pt-4 md:pt-10
        pb-10 lg:pt-[100px] lg:pb-[350px] bg-[#faeee7] text-[#33272a] gap-10"
      >
        {/* Side Info */}
        <SideInfo post={post} />

        {/* Content */}
        <PostContent post={post} />

        <CommentSection post={post} />
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const res: Post[] = await fetchPosts();
  return res.map((post) => ({
    slug: post.slug.current.toString(),
  }));
}
