import React from "react";
import formatDate from "../../lib/formatDate";

type Props = {
  post: Post;
};

export default function InPostInfo({ post }: Props) {
  return (
    <div className="flex flex-col opacity-70">
      <div className="flex flex-row gap-5 items-center pt-1">
        {/* Published Date */}
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
            {formatDate(post.publishedAt, false)}
          </p>
        </div>

        {/* Location */}
        <div className="flex flex-row gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fill-rule="evenodd"
              d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
              clip-rule="evenodd"
            />
          </svg>
          <p className="relative text-sm font-medium tracking-wide">
            {`${post.location.city}, ${post.location.country}`}
          </p>
        </div>
      </div>
      {/* Category */}
      <p className="relative text-sm font-medium tracking-wide pt-2">
        {`#${post.category.title}`}
      </p>
    </div>
  );
}
