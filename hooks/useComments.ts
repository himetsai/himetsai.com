import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { client } from "../lib/sanity.client";
import { groq } from "next-sanity";

const query = groq`
  *[_type=='post' && slug.current == $slug][0] {
    comments
  }
`;

export default function useComments(post: Post) {
  const { user } = useAuth0();
  const [text, setText] = useState<string>("");
  const [comments, setComment] = useState<Comment[] | undefined>(post.comments);

  // listen to comment change
  useEffect(() => {
    const subscription = client
      .listen(query, { slug: post.slug.current })
      .subscribe((update) => {
        if (update.result) setComment(update.result.comments);
      });

    return () => subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [client]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (text) {
      try {
        if (!user) return console.log("Need Authorization.");

        const newComment = { username: user.nickname, text };

        await client
          .patch(post._id)
          .append("comments", [newComment])
          .commit({ autoGenerateArrayKeys: true });

        setText("");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return { text, setText, comments, onSubmit };
}
