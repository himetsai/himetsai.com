import { defineField, defineType } from "sanity";

export default defineType({
  name: "comment",
  title: "Comment",
  type: "document",
  fields: [
    defineField({
      name: "username",
      title: "Username",
      type: "string",
    }),
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "string",
    }),
    defineField({
      name: "highlighted",
      title: "Highlighted",
      type: "boolean",
      initialValue: false,
    }),
  ],
});
