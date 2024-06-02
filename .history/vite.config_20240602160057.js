import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import styleImport from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    styleImport({
      // 这里可以定义你想要全局引入的样式文件
      // 例如，引入全局的 less 变量文件
      resolveStyle: ['.less', '.sass', '.scss', '.style'],
    }),
  ],
  server: {
    host: '0.0.0.0',
    port: 8080
  }
})
