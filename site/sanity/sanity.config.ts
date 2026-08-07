import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import blogPost from "./schemas/blogPost";

export default defineConfig({
  name: "path-to-peace",
  title: "Path to Peace Blog",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [blogPost],
  },
});
