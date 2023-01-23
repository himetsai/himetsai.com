import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
const token = process.env.NEXT_PUBLIC_SANITY_AUTH_TOKEN;

export const config = {
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === "production",
};

export const CommentConfig = {
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
};

export const client = createClient(config);

export const commentClient = createClient(CommentConfig);

export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source);
