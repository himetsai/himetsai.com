import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";

const query = groq`
  *[_type=='post'] {
    ...,
    category->
  } | order(_createdAt desc)
`;

export const fetchPosts = async () => {
  const posts: Post[] = await client.fetch(query);
  return posts;
};
