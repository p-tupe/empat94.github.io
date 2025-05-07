// @ts-check
import { defineConfig } from "astro/config"

import sitemap from "@astrojs/sitemap"
import robotsTxt from "astro-robots-txt"
import compressor from "astro-compressor"

// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true,
  },
  site: "https://www.priteshtupe.com",
  devToolbar: { enabled: false },
  integrations: [sitemap(), robotsTxt(), compressor()],
})
