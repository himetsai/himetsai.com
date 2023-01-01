import React from "react";
import Link from "next/link";

type Props = {
  post: Post;
};

export default function BlogCard({ post }: Props) {
  return (
    <div className="group w-min origin-top-right md:-rotate-90">
      <Link
        href={`/blog/post/${post.slug.current}`}
        className="relative flex flex-col cursor-pointer mt-6 md:mt-7 w-[90vw] md:w-min 
        md:p-10 md:h-[70vh] border border-zinc-900 rounded-md shrink-0 bg-zinc-100 
        group-hover:bg-[#ff7777]"
      >
        <div className="h-full flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold text-start md:vertical-title">
            {post.title}
          </h2>
        </div>
      </Link>
    </div>
  );
}
