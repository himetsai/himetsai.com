import React from "react";
import { motion } from "framer-motion";
import TableOfContents from "./contentTable";
import formatDate from "../../lib/formatDate";

type Props = {
  post: Post;
};

export default function SideInfo({ post }: Props) {
  return (
    <motion.div
      // initial={{ opacity: 0, x: -500 }}
      // animate={{ opacity: 1, x: 0 }}
      // transition={{ duration: 1 }}
      className="fixed left-0 top-60 py-7 pl-4 pr-8 space-y-5 bg-[#fffffe] 
    border-2 border-l-0 border-[#33272a] rounded-r-lg"
    >
      {/* Publishing Date */}
      <div className="relative tracking-wide">
        <p className="text-xs opacity-60">Published Time</p>
        <p className="relative text-sm font-medium">
          {formatDate(post.publishedAt)}
        </p>
      </div>

      {/* Category */}
      <div className="relative tracking-wide">
        <p className="text-xs opacity-60">Category</p>
        <p className="relative text-sm font-medium">
          {`#${post.category.title}`}
        </p>
      </div>

      {/* Table of Contents */}
      {post.headings?.length > 0 && (
        <TableOfContents headings={post.headings} />
      )}
    </motion.div>
  );
}
