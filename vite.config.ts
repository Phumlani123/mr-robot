/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      "@": "/src",
      // "@components": "/src/components",
      // "@assets": "/src/assets",
      // "@features": "/src/features",
      // "@utils": "/src/utils",
      // "@hooks": "/src/hooks",
      // "@providers": "/src/providers",
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
});
