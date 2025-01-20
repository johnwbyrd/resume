import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [
    tailwind({
      // Ensure CSS is properly included in build
      applyBaseStyles: true,
    }),
  ],
  // Optional: If you want to control CSS bundling
  build: {
    assets: "_astro",
    inlineStylesheets: "auto",
  },
});
