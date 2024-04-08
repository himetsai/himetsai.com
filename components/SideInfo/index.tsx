"use client";
import React from "react";
import { motion } from "framer-motion";
import TableOfContents from "./contentTable";
import formatDate from "../../lib/formatDate";
import { useIsLarge } from "../../hooks/useMediaQuery";
import Link from "next/link";

type Props = {
  post: Post;
};

export default function SideInfo({ post }: Props) {
  const isLarge: boolean = useIsLarge();

  return (
    <>
      {isLarge && (
        <motion.div
          className={`fixed left-0 top-[50%] py-7 pl-4 pr-8 space-y-5 bg-[#fffffe] 
          border-2 border-l-0 border-[#33272a] rounded-r-lg`}
          style={{ transform: "translateY(-50%)" }}
        >
          {/* Publishing Date */}
          <div className="relative tracking-wide">
            <p className="text-xs opacity-60">Published Time</p>
            <p className="relative text-sm font-medium">
              {formatDate(post.publishedAt)}
            </p>
          </div>

          {/* Location */}
          <div className="relative tracking-wide">
            <p className="text-xs opacity-60">Location</p>
            <p className="relative text-sm font-medium">
              {`${post.location.city}, ${post.location.country}`}
            </p>
          </div>

          {/* Category */}
          <div className="relative tracking-wide">
            <p className="text-xs opacity-60">Category</p>
            <Link
              className="relative text-sm font-medium"
              href={`/shitpost/?cat=${post.category.slug.current}`}
            >
              #<span className="hover:underline">{post.category.title}</span>
            </Link>
          </div>

          {/* Table of Contents */}
          {post.headings?.length > 0 && (
            <TableOfContents headings={post.headings} />
          )}
        </motion.div>
      )}
    </>
  );
}
