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
  })