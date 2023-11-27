import React from "react";
import useComments from "../../hooks/useComments";
import CommentForm from "./form";
import CommentList from "./list";

type Props = {
  post: Post;
};

export default function CommentSection({ post }: Props) {
  const { text, setText, comments, onSubmit } = useComments(post);

  return (
    <div
      className="flex flex-col w-full max-w-[800px] lg:ml-12 bg-[#fffffe] p-5
          md:p-10 border-2 border-[#33272a] rounded-lg z-20"
    >
      <h4
        id="comments"
        className="text-2xl leading-5 py-6 font-bold tracking-wider"
      >
        Comments
      </h4>

      {comments && <CommentList comments={comments} />}

      <CommentForm text={text} setText={setText} onSubmit={onSubmit} />
    </div>
  );
}
