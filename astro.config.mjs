// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import cloudflare from "@astrojs/cloudflare";

const isProd = process.env.NODE_ENV === "PROD";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [icon()],
  adapter: isProd ? cloudflare() : undefined,

  i18n: {
    defaultLocale: "en",
    locales: ["en", "it", "de", "fr"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
