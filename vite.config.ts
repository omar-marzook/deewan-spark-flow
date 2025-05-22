import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import vike from 'vike/plugin';
import path from "path";
import { componentTagger } from "lovable-tagger";
import { Buffer } from 'buffer';
import fs from 'fs';

// Provide Buffer for the browser environment
globalThis.Buffer = Buffer;

// Custom plugin to inject critical CSS
function injectCriticalCss() {
  const criticalCssPath = path.resolve(__dirname, 'src/critical.css');
  
  return {
    name: 'inject-critical-css',
    transformIndexHtml(html: string): string {
      try {
        // Read the critical CSS file
        const criticalCss = fs.readFileSync(criticalCssPath, 'utf8');
        
        // Inject the critical CSS into the HTML
        return html.replace(
          '</head>',
          `<style id="critical-css">${criticalCss}</style></head>`
        );
      } catch (error) {
        console.error('Error injecting critical CSS:', error);
        return html;
      }
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    vike(),
    mode === 'development' &&
    componentTagger(),
    // Only inject critical CSS in production
    mode === 'production' && injectCriticalCss(),
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
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunk for React and related libraries
          if (id.includes('node_modules/react') || 
              id.includes('node_modules/react-dom') || 
              id.includes('node_modules/react-router-dom')) {
            return 'vendor';
          }
          
          // UI components chunk
          if (id.includes('node_modules/@radix-ui/react-accordion') || 
              id.includes('node_modules/@radix-ui/react-dialog') ||
              id.includes('node_modules/@radix-ui/react-dropdown-menu') ||
              id.includes('node_modules/@radix-ui/react-navigation-menu') ||
              id.includes('node_modules/@radix-ui/react-slot')) {
            return 'ui';
          }
          
          // Charts chunk
          if (id.includes('node_modules/recharts')) {
            return 'charts';
          }
          
          // Carousel chunk
          if (id.includes('node_modules/embla-carousel-react') || 
              id.includes('node_modules/embla-carousel-autoplay')) {
            return 'carousel';
          }
        }
      }
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
  },
}));
