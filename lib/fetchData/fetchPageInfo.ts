import { groq } from "next-sanity";
import { client } from "../sanity.client";
import { cache } from "react";

const query = groq`
  *[ _type == "pageInfo"][0] {
  ...,
  socials[]->
}
`;

export const fetchPageInfo = cache(async () => {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const pageInfo: PageInfo = await client.fetch(query);
  return pageInfo;
});
