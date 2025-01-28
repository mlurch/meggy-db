// https://nuxt.com/docs/api/configuration/nuxt-config
import yaml from "@rollup/plugin-yaml";
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
   compatibilityDate: "2024-11-01",
   devtools: { enabled: true },
   css: ["~/assets/css/main.css"],
   vite: {
      plugins: [yaml(), tailwindcss()],
   },
});
