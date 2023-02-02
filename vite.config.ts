import react from "@vitejs/plugin-react";
import Pages from "vite-plugin-pages";
import AutoImport from "unplugin-auto-import/vite";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    global: "globalThis",
  },
  resolve: {
    alias: {
      process: "process/browser",
      util: "util",
    },
  },
  plugins: [
    react(),
    Pages(),
    AutoImport({
      imports: ["react"],
      dts: "./src/auto-imports.d.ts",
    }),
  ],
});
