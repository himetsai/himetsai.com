import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { fetchPosts } from "../../../lib/fetchPosts";
import { fetchPost } from "../../../lib/fetchPost";

type Props = {
  post: Post;
};

export default function Post({ post }: Props) {
  console.log(post);
  return <div>Post: {post.slug.current}</div>;
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
