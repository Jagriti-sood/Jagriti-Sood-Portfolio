import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

function figmaAssetPlugin() {
  return {
    name: 'figma-asset',
    resolveId(source: string) {
      if (source.startsWith('figma:asset/')) {
        const filename = source.replace('figma:asset/', '').replace(/\.png$/, '.webp')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

// Copy dist/index.html → dist/404.html so GitHub Pages serves the SPA shell
// for unknown paths (e.g. /work/sped-summit on direct hit) and React Router
// resolves the route on the client.
function spaFallbackPlugin() {
  return {
    name: 'spa-404-fallback',
    apply: 'build' as const,
    closeBundle() {
      const dist = path.resolve(__dirname, 'dist')
      const src = path.join(dist, 'index.html')
      const dst = path.join(dist, '404.html')
      if (fs.existsSync(src)) fs.copyFileSync(src, dst)
    },
  }
}

export default defineConfig({
  base: '/',  // 🔥🔥 MOST IMPORTANT

  plugins: [
    figmaAssetPlugin(),
    react(),
    tailwindcss(),
    spaFallbackPlugin(),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  assetsInclude: ['**/*.svg', '**/*.csv'],
})
