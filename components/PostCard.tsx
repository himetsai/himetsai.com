import Link from "next/link";
import React from "react";

type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  return (
    <div className="group">
      <Link
        href={`/blog/post/${post.slug.current}`}
        className="relative flex flex-col cursor-pointer w-[90vw] md:w-auto md:h-[70vh] border
            border-[#33272a] rounded-md shrink-0 bg-[#fffffe] 
            group-hover:bg-[#ff7777] group-hover:scale-105 transition duration-200 ease-in-out"
      >
        <div className="h-full flex flex-col justify-between items-start px-2 py-4 md:vertical-title">
          {/* Date */}
          <p className="relative text-sm">
            {new Date(post.publishedAt).toLocaleDateString("ja-JP", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </p>

          {/* Title */}
          <h2
            className="text-3xl font-bold text-start text-[#33272a]
                  group-hover:text-[#fffffe] px-4 py-9 mb-15"
          >
            {post.title}
          </h2>

          {/* Catagory */}
          <p className="relative self-end text-sm">{`#${post.category.title}`}</p>
        </div>
      </Link>
    </div>
  );
}
