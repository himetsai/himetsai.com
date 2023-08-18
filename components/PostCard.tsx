import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import formatDate from "../lib/formatDate";

type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {

  return (
    <motion.div
      className="flex group  w-[90vw] rounded-md md:w-auto 
      md:h-[70vh] md:vertical-title"
    >
      <Link
        href={`/shitpost/${post.slug.current}`}
        className="flex flex-col shrink-0 w-full h-full px-2 py-2 md:py-4 bg-[#fffffe]
        group-hover:bg-[#ff7777] border-[1.5px] border-[#33272a] 
        rounded-md transition text-[#33272a] duration-200 ease-in-out
        group-hover:text-[#fffffe] group-hover:scale-105 group-active:scale-95"
      >
        {/* Date */}
        <div className="flex flex-row items-center gap-1 pb-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 md:rotate-90"
          >
            <path
              fillRule="evenodd"
              d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
              clipRule="evenodd"
            />
          </svg>

          <p className="relative text-sm">
            {formatDate(post.publishedAt, false)}
          </p>
        </div>

        {/* Title */}
        <h2
          className="text-2xl md:text-3xl font-bold text-start
            px-4 py-2 md:py-9 mb-15"
        >
          {post.title}
        </h2>

        {/* Catagory */}
        <p className="relative self-end text-sm">{`#${post.category.title}`}</p>
      </Link>
    </motion.div>
  );
}
