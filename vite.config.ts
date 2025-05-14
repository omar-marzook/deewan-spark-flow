import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import ssr from 'vite-plugin-ssr/plugin';
import path from "path";
import { componentTagger } from "lovable-tagger";
import { Buffer } from 'buffer';

// Provide Buffer for the browser environment
globalThis.Buffer = Buffer;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    ssr(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    // Provide Buffer as a global for the browser
    global: 'globalThis',
  },
  build: {
    rollupOptions: {},
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    reportCompressedSize: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
      },
    },
    ssr: true, // Enable SSR build
  },
}));
