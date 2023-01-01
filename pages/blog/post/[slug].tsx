import React from "react";
import Image from "next/image";
import { GetStaticProps, GetStaticPaths } from "next";
import { fetchPosts } from "../../../lib/fetchPosts";
import { fetchPost } from "../../../lib/fetchPost";
import urlFor from "../../../lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponent } from "../../../components/RichTextComponents";

type Props = {
  post: Post;
};

export default function Post({ post }: Props) {
  return (
    <article className="p-10 pb-28 bg-zinc-50">
      <section className="border border-red-400 text-white">
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
      </section>

      <PortableText value={post.body} components={RichTextComponent} />
    </article>
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
