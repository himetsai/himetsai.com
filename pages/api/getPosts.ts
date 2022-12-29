import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";

type Data = {
  posts: Post[];
};

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    category->
  } | order(_createdAt desc)
`;

const getPosts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const posts: Post[] = await client.fetch(query);
  res.status(200).json({ posts });
};

export default getPosts;
