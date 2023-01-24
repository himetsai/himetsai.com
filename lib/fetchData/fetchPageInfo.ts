import { groq } from "next-sanity";
import { client } from "../sanity.client";

const query = groq`
  *[ _type == "pageInfo"][0] {
  ...,
  socials[]->
}
`;

export const fetchPageInfo = async () => {
  const pageInfo: PageInfo = await client.fetch(query);
  return pageInfo;
};
