import React from "react";
import Image from "next/image";
import urlFor from "../lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponent } from "./RichTextComponents";

type Props = {
  post: Post;
};

export default function PostContent({ post }: Props) {
  return (
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
  );
}
