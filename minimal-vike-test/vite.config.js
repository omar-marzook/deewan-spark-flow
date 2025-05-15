import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import vike from 'vike/plugin'

export default defineConfig({
  plugins: [
    react(),
    vike()
  ],
  root: __dirname
})