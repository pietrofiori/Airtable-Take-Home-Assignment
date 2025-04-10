/// <reference types="vite/client" />
import react from "@vitejs/plugin-react";
import * as path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "./src") },
      { find: "@utils", replacement: path.resolve(__dirname, "./src/utils") },
      { find: "@types", replacement: path.resolve(__dirname, "./src/types") },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "./src/components")
      },
      {
        find: "@constants",
        replacement: path.resolve(__dirname, "./src/constants")
      },
      { find: "@assets", replacement: path.resolve(__dirname, "./src/assets") },
      { find: "@routes", replacement: path.resolve(__dirname, "./src/routes") },
      {
        find: "@screens",
        replacement: path.resolve(__dirname, "./src/screens")
      },
      { find: "@theme", replacement: path.resolve(__dirname, "./src/theme") }
    ]
  }
});
