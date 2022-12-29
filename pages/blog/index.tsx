import { GetStaticProps } from "next";
import React from "react";
import BlogList from "../../components/BlogList";
import { fetchPosts } from "../../lib/fetchPosts";

type Props = {
  posts: Post[];
};

export default function Blog({ posts }: Props) {
  return (
    <div className="bg-zinc-50 pt-5">
      <BlogList posts={posts} />
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts: Post[] = await fetchPosts();

  return {
    props: { posts },
    revalidate: 10,
  };
};
