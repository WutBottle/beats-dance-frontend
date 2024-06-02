import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      '@': '/src',
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,

      }
    },
  },
  server: {
    host: '0.0.0.0',
    port: 8080
  }
})
