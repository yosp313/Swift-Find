import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

export const config = defineConfig({
  projectId: "wlhkuohe",
  dataset: "production",
  title: "Swift Find",
  basePath: "/admin",
  plugins: [structureTool()],
});
