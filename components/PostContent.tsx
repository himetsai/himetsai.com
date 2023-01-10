import React from "react";
import Image from "next/image";
import urlFor from "../lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponent } from "./RichTextComponents";
import InPostInfo from "./InPostInfo";
import { motion } from "framer-motion";
import { useIsLarge } from "../lib/useMediaQuery";

type Props = {
  post: Post;
};

export default function PostContent({ post }: Props) {
  const isLarge: boolean = useIsLarge();

  return (
    <motion.article
      id="post-content"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.75 }}
      className="md:w-[768px] lg:ml-12 bg-[#fffffe] pt-7 p-5
      md:p-10 border-2 border-[#33272a] rounded-lg z-20"
    >
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold tracking-wider mb-2">{post.title}</h1>

      {/* Info Under Title */}
      {!isLarge && <InPostInfo post={post} />}

      {/* Main Image */}
      <div className="relative w-full h-72 my-5 lg:my-8 sm:h-96">
        <Image
          className="object-cover object-center mx-auto border-[1.5px]
          border-[#33272a] rounded-lg"
          src={urlFor(post.mainImage).url()}
          alt={post.author.name}
          fill
        />
      </div>

      {/* Post Content */}
      <PortableText value={post.body} components={RichTextComponent} />
    </motion.article>
  );
}
