import { defineType } from "sanity";

export default defineType({
  name: "social",
  title: "Social",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "platform for social media",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "username",
      title: "Username",
      type: "string",
    },
    {
      name: "link",
      title: "Link",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "url",
      title: "Url",
      type: "url",
    },
  ],
});
