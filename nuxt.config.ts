import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    build: {
      postcss: {
        postcssOptions: {
          plugins: {
            tailwindcss: {},
            autoprefixer: {},
          },
        },
      },
    },
    css: [
      "~/assets/css/tailwind.css"
    ],
    serverMiddleware: [
      // Will register file from project server-middleware directory to handle /server-api/* requests
      { path: "/api", handler: "~/server/api/index.js" },
    ],
  })