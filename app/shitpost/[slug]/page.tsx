import React from "react";
import { fetchPosts } from "../../../lib/fetchData/fetchPosts";
import { fetchPost } from "../../../lib/fetchData/fetchPost";
import SideInfo from "../../../components/SideInfo";
import PostContent from "../../../components/PostContent";
import { urlFor } from "../../../lib/sanity.client";
import CommentSection from "../../../components/CommentSection";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export const revalidate = 60;

export async function generateMetadata({ params }: Props) {
  const { slug } = params;
  const post: Post = await fetchPost(slug);

  if (!post) notFound();

  return {
    title: post.title,
    openGraph: {
      title: post.title,
      siteName: "himetsai",
      images: [
        {
          url: urlFor(post.mainImage).url(),
          width: 1200,
          height: 630,
          type: "image/png",
        },
      ],
    },
    twitter: {
      title: post.title,
      card: "summary_large_image",
      images: [
        {
          url: urlFor(post.mainImage).url(),
          width: 1200,
          height: 630,
          type: "image/png",
        },
      ],
    },
  };
}

export default async function Post({ params }: Props) {
  const { slug } = params;
  const post: Post = await fetchPost(slug);

  if (!post) notFound();

  return (
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
  );
}

export async function generateStaticParams() {
  const res: Post[] = await fetchPosts();

  return res.map((post) => ({
    slug: post.slug.current.toString(),
  }));
}
