import { defineConfig } from "vite"
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        { src: 'packages/manifest.json', dest: '' },
        { src: 'packages/_locales', dest: '' },
        { src: 'packages/LICENSE', dest: '' },
        { src: 'packages/README.md', dest: '' },
      ],
    }),
  ],
  build: {
    emptyOutDir: false, // 确保不会清空 dist 目录
    rollupOptions: {
      input: 'packages/main.ts'
    }
  }
})
