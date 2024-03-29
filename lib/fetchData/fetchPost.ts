import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import { cache } from "react";

const query = groq`
  *[_type=='post' && slug.current == $slug][0] {
    ...,
    author->,
    category->,
    location->,
    "headings": body[length(style) == 2 && string::startsWith(style, "h")]
  }
`;

export const fetchPost = cache(async (slug: string | string[] | undefined) => {
  const post: Post = await client.fetch(query, { slug });
  return post;
});
