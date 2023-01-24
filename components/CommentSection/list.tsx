import React from "react";
import Comment from "./comment";

type Props = { comments: Comment[] };

export default function list({ comments }: Props) {
  return (
    <div className="flex flex-col w-full mt-2 sm:mt-5 px-1 sm:px-2">
      {comments.map((comment, index) => {
        return <Comment key={index} comment={comment} index={index} />;
      })}
    </div>
  );
}
