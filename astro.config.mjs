import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://miki-tebe.vercel.app",
  integrations: [react(), markdoc(), keystatic(), tailwind()],
  output: "hybrid",
  adapter: vercel()
});