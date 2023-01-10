import React from "react";

type Props = {
  post: Post;
};

export default function InPostInfo({ post }: Props) {
  return (
    <div className="flex flex-row gap-5 items-center pt-1 opacity-70">
      <div className="flex flex-row gap-1 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-4 h-4"
        >
          <path
            fillRule="evenodd"
            d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
            clipRule="evenodd"
          />
        </svg>
        <p className="relative text-sm font-medium tracking-wide">
          {new Date(post.publishedAt).toLocaleDateString("ja-JP", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
        </p>
      </div>

      {/* Category */}
      <p className="relative text-sm font-medium tracking-wide">
        {`#${post.category.title}`}
      </p>
    </div>
  );
}
