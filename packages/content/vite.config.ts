import { defineConfig } from 'vite';

export default defineConfig({
  root: __dirname,
  build: {
    outDir: '../../dist/content',
    lib: {
      entry: './src/main.ts',
      formats: ['es'],
      name: 'ContentScript',
      fileName: 'content',
    },
    rollupOptions: {
      output: {
        entryFileNames: 'content.js',
      },
    },
  },
  plugins: [],
});
