import React from "react";
import useComments from "../../hooks/useComments";
import CommentForm from "./form";

type Props = {
  post: Post;
};

export default function CommentSection({ post }: Props) {
  const { text, setText, comments, onSubmit } = useComments(post);

  return (
    <div>
      {comments &&
        comments.map((comment, index) => {
          return <div key={index}>{comment.text}</div>;
        })}
      <CommentForm text={text} setText={setText} onSubmit={onSubmit} />
    </div>
  );
}
