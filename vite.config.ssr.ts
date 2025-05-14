import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import ssr from 'vite-plugin-ssr/plugin';
import path from "path";
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
  ],
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
    rollupOptions: {
      // Explicitly mark React libraries and UI components as external for SSR build
      external: [
        'react', 
        'react-dom', 
        'react-router-dom',
        '@radix-ui/react-accordion', 
        '@radix-ui/react-dialog',
        '@radix-ui/react-dropdown-menu',
        '@radix-ui/react-navigation-menu',
        '@radix-ui/react-slot',
        'recharts',
        'embla-carousel-react', 
        'embla-carousel-autoplay'
      ]
    },
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