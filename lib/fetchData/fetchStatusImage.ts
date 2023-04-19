import { groq } from "next-sanity";
import { client } from "../sanity.client";

const query = groq`
  *[ _type == "statusImage"][0]
`;

export const fetchStatusImage = async () => {
  const statusImage: StatusImage = await client.fetch(query);
  return statusImage;
};
