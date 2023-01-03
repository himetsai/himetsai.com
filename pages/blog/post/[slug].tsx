import React from "react";
import Image from "next/image";
import { GetStaticProps } from "next";
import { fetchPosts } from "../../../lib/fetchPosts";
import { fetchPost } from "../../../lib/fetchPost";
import urlFor from "../../../lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponent } from "../../../components/RichTextComponents";
import { useIsMedium, useIsLarge } from "../../../lib/useMediaQuery";

type Props = {
  post: Post;
};

export default function Post({ post }: Props) {
  const isMedium: boolean = useIsMedium();
  const isLarge: boolean = useIsLarge();

  return (
    <div
      className="flex items-center justify-center px-5 md:px-0 py-[100px]
    bg-[#faeee7] text-[#33272a]"
    >
      {/* Side Info */}
      {isLarge && (
        <div className="fixed left-10 top-36">
          {/* Published Date */}
          <div className="relative tracking-wide">
            <p className="text-xs opacity-60">Published Time</p>
            <p className="relative text-sm font-medium">
              {new Date(post.publishedAt).toLocaleDateString("ja-JP", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>

          {/* Category */}
          <div className="relative tracking-wide mt-5">
            <p className="text-xs opacity-60">Category</p>
            <p className="relative text-sm font-medium">
              {`#${post.category.title}`}
            </p>
          </div>
        </div>
      )}

      <article
        className="md:w-[768px] lg:ml-12 bg-[#fffffe] p-5 md:p-10 border-2
      border-[#33272a] rounded-lg z-20"
      >
        {/* Title */}
        <h1 className="text-4xl font-bold tracking-wider">{post.title}</h1>

        {/* Main Image */}
        <div className="relative w-full h-72 my-10 sm:h-96 ">
          <Image
            className="object-cover object-center mx-auto border-[1.5px] border-[#33272a] rounded-lg"
            src={urlFor(post.mainImage).url()}
            alt={post.author.name}
            fill
          />
        </div>

        {/* Post Content */}
        <PortableText value={post.body} components={RichTextComponent} />
      </article>
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
