import React from "react";
import { GetStaticProps } from "next";
import { fetchPosts } from "../../../lib/fetchPosts";
import { fetchPost } from "../../../lib/fetchPost";
import { useIsLarge } from "../../../lib/useMediaQuery";
import SideInfo from "../../../components/SideInfo";
import PostContent from "../../../components/PostContent";

type Props = {
  post: Post;
};

export default function Post({ post }: Props) {
  const isLarge: boolean = useIsLarge();

  return (
    <div
      className="flex items-center justify-center px-5 md:px-0 pt-[100px] pb-[200px]
    bg-[#faeee7] text-[#33272a]"
    >
      {/* Side Info */}
      {isLarge && <SideInfo post={post} />}

      {/* Content */}
      <PostContent post={post} />
    </div>
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
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const post: Post = await fetchPost(params?.slug);

  return {
    props: { post },
    revalidate: 60,
  };
};
