import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  root: __dirname,
  base: './',
  build: {
    outDir: '../../dist/popup',
    rollupOptions: {
      input: './index.html',
    },
  },
  plugins: [vue()],
})
