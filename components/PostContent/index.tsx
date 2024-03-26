"use client";
import React from "react";
import Image from "next/image";
import urlFor from "../../lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponent } from "../RichTextComponents";
import InPostInfo from "./info";
import { useIsLarge } from "../../hooks/useMediaQuery";

type Props = {
  post: Post;
};

export default function PostContent({ post }: Props) {
  const isLarge: boolean = useIsLarge();

  return (
    <article
      id="post-content"
      className="w-full max-w-[800px] lg:ml-12 bg-[#fffffe] pt-7 p-5
      md:p-10 border-2 border-[#33272a] rounded-lg z-20"
    >
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold tracking-wider mb-2 text-[#33272a]">
        {post.title}
      </h1>

      {/* Info Under Title */}
      {!isLarge && <InPostInfo post={post} />}

      {/* Main Image */}
      <div className="relative w-full h-60 my-5 lg:my-8 sm:h-auto sm:aspect-[3/2]">
        <Image
          className="object-cover object-center mx-auto border-[1.5px]
          border-[#33272a] rounded-lg"
          src={urlFor(post.mainImage).url()}
          alt={post.author.name}
          fill
          priority
        />
      </div>

      {/* Post Content */}
      <PortableText value={post.body} components={RichTextComponent} />
    </article>
  );
}
