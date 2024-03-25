import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { codeInput } from "@sanity/code-input";
import { schemaTypes } from "./schemas";
import { myTheme } from "./theme";
import { latexInput } from "sanity-plugin-latex-input";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  basePath: "/studio",
  name: "Himesama_Content_Studio",
  title: "Himesama Content Studio",

  projectId,
  dataset,

  plugins: [deskTool(), visionTool(), codeInput(), latexInput()],

  schema: {
    types: schemaTypes,
  },
  theme: myTheme,
});
