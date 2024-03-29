import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import { cache } from "react";

const query = groq`
  *[_type=='post'] {
    ...,
    category->
  } | order(_createdAt desc)
`;

export const fetchPosts = cache(async () => {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const posts: Post[] = await client.fetch(query);
  return posts;
});
