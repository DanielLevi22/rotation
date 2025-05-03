import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import tsConfigPathsPlugin from 'vite-tsconfig-paths'

const tsConfigPaths = tsConfigPathsPlugin({
  projects: [resolve(__dirname, 'tsconfig.json')]
})

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin(), tsConfigPaths],
    publicDir: resolve(__dirname, 'resources')
  },
  preload: {
    plugins: [externalizeDepsPlugin(), tsConfigPaths]
  },
  renderer: {
    define: {
      'process.platform': JSON.stringify(process.platform)
    },
    css: {
      postcss: {
        plugins: [tailwindcss({ config: './src/renderer/tailwind.config.js' })]
      }
    },
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [react(), tsConfigPaths]
  }
})
