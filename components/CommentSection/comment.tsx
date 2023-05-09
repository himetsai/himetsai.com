import React from "react";
import formatDate from "../../lib/formatDate";
import { useIsSmall } from "../../hooks/useMediaQuery";

type Props = {
  comment: Comment;
  index: number;
};

export default function Comment({ comment, index }: Props) {
  const isSmall = useIsSmall();
  
  return isSmall ? (
    <div className="flex flex-row tracking-wider mb-5 justify-between">
      <div className="flex w-full flex-row gap-1">
        <div className="flex font-medium text-[#33272a]">
          {`${comment.username}:`}
        </div>
        <p className="flex h-auto font-normal text-[#594a4e]">
          {comment.text}
        </p>
      </div>

      <div
        className="flex flex-row font-normal text-sm text-[#594a4e]/70
        shrink-0 ml-5 leading-6 gap-1"
      >
        <time className="">{formatDate(comment.createdAt)}</time>
      </div>
    </div>
  ) : (
    <div className="flex flex-col tracking-wider mb-3 justify-between">
      <div className="flex flex-row w-full items-center gap-2">
        <div className="flex font-medium text-[#33272a]">
          {`${comment.username}`}
        </div>
        <time className="font-normal text-sm text-[#594a4e]/70">
          {formatDate(comment.createdAt)}
        </time>
      </div>
      <p className="flex h-auto font-normal text-[#594a4e]">
        {comment.text}
      </p>
    </div>
  );
}
