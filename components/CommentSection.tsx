import React, { useEffect } from "react";
import useComments from "../hooks/useComments";

type Props = {
  post: Post;
};

export default function CommentSection({ post }: Props) {
  const { comments } = useComments(post);

  return (
    <div>
      {comments &&
        comments.map((comment, index) => {
          return <div key={`${index + 1}F`}>{comment.username}</div>;
        })}
    </div>
  );
}
