import { client } from "./sanity.client";
import imageUrlbuilder from "@sanity/image-url";

const builder = imageUrlbuilder(client);

// @ts-ignore
const urlFor = (source: any) => {
  return builder.image(source);
};

export default urlFor;
