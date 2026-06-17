import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  cacheDir: "/tmp/vite",
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    allowedHosts: [
      "localhost",
      process.env.USER_HOST,
    ],
  }
});

process.env.USER_HOST = "";
delete process.env.USER_HOST;
