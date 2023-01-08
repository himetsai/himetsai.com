import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";

type Data = {
  pageInfo: PageInfo;
};

const query = groq`
  *[ _type == "pageInfo"][0] {
  ...,
  socials[]->
}
`;

const getPageInfo = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const pageInfo: PageInfo = await client.fetch(query);
  res.status(200).json({ pageInfo });
};

export default getPageInfo;
