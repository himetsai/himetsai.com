import React from "react";
import TableOfContents from "./TableOfContents";

type Props = {
  post: Post;
};

export default function SideInfo({ post }: Props) {
  return (
    <div
      className="fixed left-0 top-60 py-7 pl-4 pr-8 space-y-5 bg-[#fffffe] 
    border-2 border-l-0 border-[#33272a] rounded-r-lg"
    >
      {/* Published Date */}
      <div className="relative tracking-wide">
        <p className="text-xs opacity-60">Published Time</p>
        <p className="relative text-sm font-medium">
          {new Date(post.publishedAt).toLocaleDateString("ja-JP", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
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
    </div>
  );
}