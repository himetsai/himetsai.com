import React from "react";
import post from "../schemas/post";

type Props = {
  posts: Post[];
};

export default function BlogList({ posts }: Props) {
  return (
    <div>
      {posts.map(post => (
        <div key={post._id}>
          {post.title}
        </div>
      ))}
    </div>
  )
}
