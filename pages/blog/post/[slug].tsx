import React from "react";
import Image from "next/image";
import { GetStaticProps } from "next";
import { fetchPosts } from "../../../lib/fetchPosts";
import { fetchPost } from "../../../lib/fetchPost";
import urlFor from "../../../lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponent } from "../../../components/RichTextComponents";
import Link from "next/link";

type Props = {
  post: Post;
};

export default function Post({ post }: Props) {
  return (
    <div className="flex items-center justify-center py-10 bg-[#faeee7] text-[#33272a]">
      <article className="max-w-2xl">
        {/* Title */}
        <h1 className="text-4xl py-5 font-bold tracking-wider">{post.title}</h1>

        {/* Main Image */}
        <div className="relative w-full h-72 my-10 sm:h-96 ">
          <Image
            className="object-cover object-center mx-auto md:border-[1.5px] border-[#33272a] md:rounded-sm"
            src={urlFor(post.mainImage).url()}
            alt={post.author.name}
            fill
          />
        </div>

        {/* Post Content */}
        <PortableText value={post.body} components={RichTextComponent} />

        {/* <section className="border border-red-400 text-white">
        <div className="relative min-h-56 flex flex-col justify-between">
          <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
            <Image
              className="object-cover object-center mx-auto"
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div>
        </div>

        <section className="p-5 bg-red-400 w-full">
          <div className="flex flex-col justify-between gap-y-5">
            <h1 className="text-3xl font-glowSans font-bold">{post.title}</h1>
            <p>
              {new Date(post._createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        </section>
      </section> */}
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
