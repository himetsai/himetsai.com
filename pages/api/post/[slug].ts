import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";

type Data = {
  post: Post;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { slug } = req.query;
  const query = groq`
  *[_type=='post' && slug.current == $slug][0] {
    ...,
    author->,
    category->,
    "headings": body[length(style) == 2 && string::startsWith(style, "h")]
  }
`;
  const post: Post = await client.fetch(query, { slug });
  res.status(200).json({ post });
};

export default handler;
