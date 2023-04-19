import { groq } from "next-sanity";
import { client } from "../sanity.client";

const query = groq`
  *[ _type == "incident"]| order(date desc)
`;

export const fetchIncidents = async () => {
  const incidents: Incident[] = await client.fetch(query);
  return incidents;
};
