import { defineConfig, loadEnv } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd(), "")

  return {

    base: "./",

    plugins: [
      react()
    ],

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src")
      }
    },

    define: {
      __APP_ENV__: env.APP_ENV,
      "process.env": env
    },

    server: {
      host: true,
      port: 5173
    },

    preview: {
      port: 4173,
      host: true
    },

    build: {
      target: "es2019",
      outDir: "dist",
      assetsDir: "assets",
      sourcemap: false,
      emptyOutDir: true,
      chunkSizeWarningLimit: 1000
    }

  }

})
