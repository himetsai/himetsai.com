import { defineField, defineType } from "sanity";

export default defineType({
  name: "statusImage",
  title: "StatusImage",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
