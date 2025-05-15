// vike.config.js
import react from 'vike/plugin-react'

export default {
  plugins: [react()],
  // Use V1 design
  prerender: {
    partial: true
  },
  // Configure routing
  filesystemRoutingRoot: 'src/pages',
  // Explicitly define the root route
  extensions: ['page.jsx', 'page.tsx'],
  // Configure page files
  disableAutoLiftCssUrls: true
}