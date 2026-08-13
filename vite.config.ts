import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages project sites, set VITE_BASE to '/<repo-name>/'
// Example: VITE_BASE=/shevon-krishmal-portfolio/ npm run build
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || '/',
})
