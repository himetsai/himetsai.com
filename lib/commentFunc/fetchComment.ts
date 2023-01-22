import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";

const query = groq`
  *[_type=='post' && slug.current == $slug][0] {
    comments
  }
`;

export const fetchComment = async (slug: string | string[] | undefined) => {
  const post: Post = await client.fetch(query, { slug });
  return post.comments;
};
