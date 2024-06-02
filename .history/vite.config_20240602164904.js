import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    loader: 'jsx',
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@': '/src',
    }
  },
  server: {
    host: '0.0.0.0',
    port: 8080
  }
})
