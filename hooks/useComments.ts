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
  const { getAccessTokenSilently } = useAuth0();
  const [text, setText] = useState<String>("");
  const [comments, setComment] = useState<Comment[] | undefined>(post.comments);

  // listen to comments change
  useEffect(() => {
    const subscription = client
      .listen(query, { slug: post.slug.current })
      .subscribe((update) => {
        console.log(JSON.stringify(update.result, null, 4));
        if (update.result) setComment(update.result.comments);
      });

    return () => subscription.unsubscribe();
  }, [client]);

  return { text, setText, comments };
}
