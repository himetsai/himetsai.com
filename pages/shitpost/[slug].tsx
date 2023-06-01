import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import { fetchPosts } from "../../lib/fetchData/fetchPosts";
import { fetchPost } from "../../lib/fetchData/fetchPost";
import { useIsLarge } from "../../hooks/useMediaQuery";
import SideInfo from "../../components/SideInfo";
import PostContent from "../../components/PostContent";
import { urlFor } from "../../lib/sanity.client";
import CommentSection from "../../components/CommentSection";

type Props = {
  post: Post;
};

export default function Post({ post }: Props) {
  const isLarge: boolean = useIsLarge();

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
      </Head>

      <div
        className="flex flex-col items-center justify-center px-5 pt-4 md:pt-10
        pb-10 lg:pt-[100px] lg:pb-[350px] bg-[#faeee7] text-[#33272a] gap-10"
      >
        {/* Side Info */}
        {isLarge && <SideInfo post={post} />}

        {/* Content */}
        <PostContent post={post} />

        <CommentSection post={post} />
      </div>
    </>
  );
}

export const getStaticPaths = async () => {
  const res: Post[] = await fetchPosts();
  const paths = res.map((post) => {
    return {
      params: { slug: post.slug.current.toString() },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const post: Post = await fetchPost(params?.slug);

  return {
    props: { post },
    revalidate: 60,
  };
};
