import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { ghPages } from 'vite-plugin-gh-pages'

export default defineConfig({
  plugins: [vue(), ghPages()],
  base: "my-workout-app",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})