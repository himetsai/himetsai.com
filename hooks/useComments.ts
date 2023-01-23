import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { commentClient } from "../lib/sanity.client";
import { groq } from "next-sanity";
import useSWR from "swr";

const query = groq`
  *[_type=='post' && slug.current == $slug][0] {
    comments
  }
`;

export default function useComments(post: Post) {
  const { user } = useAuth0();
  const [text, setText] = useState<string>("");
  const [comments, setComments] = useState<Comment[] | undefined>();

  const fetcher = (params: Object) =>
    commentClient.fetch(query, params).then((res) => setComments(res.comments));

  useSWR({ slug: post.slug.current }, fetcher);

  // listen to comment change
  useEffect(() => {
    const subscription = commentClient
      .listen(query, { slug: post.slug.current })
      .subscribe((update) => {
        if (update.result) setComments(update.result.comments);
      });

    return () => subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [commentClient]);

  const onSubmit = async (e: React.FormEvent | React.KeyboardEvent) => {
    e.preventDefault();

    if (text) {
      try {
        if (!user) return console.log("Need Authorization.");

        const newComment = {
          username: user.nickname,
          text,
          createdAt: new Date().toISOString(),
        };
        setText("");

        await commentClient
          .patch(post._id)
          .append("comments", [newComment])
          .commit({ autoGenerateArrayKeys: true });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return { text, setText, comments, onSubmit };
}
