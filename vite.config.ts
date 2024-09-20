import path from "node:path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { manifestAssetsPlugin } from "./manifestAssetsPlugin";
// import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // eslint()
    TanStackRouterVite(),
    manifestAssetsPlugin(),
  ],
  server: {
    host: "0.0.0.0",
  },
  base: "./",

  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        index: path.resolve("index.html"),
        serviceWorker: path.resolve("./src/serviceWorker.ts"),
      },
      output: {
        entryFileNames: "[name].js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },

  assetsInclude: ["**/*.png"],
});
