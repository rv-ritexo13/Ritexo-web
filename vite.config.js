import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'

// GitHub Pages serves this project at https://<user>.github.io/Ritexo-web/
// so assets must be requested under that sub-path.
const base = '/Ritexo-web/'

// SPA fallback: GitHub Pages has no server-side routing. Copying the built
// index.html to 404.html means any deep link (e.g. /Ritexo-web/contact) still
// boots the app, and React Router then renders the correct route.
function spaFallback() {
  return {
    name: 'spa-404-fallback',
    closeBundle() {
      const dist = resolve(__dirname, 'dist')
      copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'))
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [react(), spaFallback()],
  server: {
    port: 5173,
    open: true,
  },
})
