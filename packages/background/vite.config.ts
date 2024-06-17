import { defineConfig } from 'vite';

export default defineConfig({
  root: __dirname,
  build: {
    outDir: '../../dist/background',
    lib: {
      entry: './src/main.ts',
      formats: ['es'],
      name: 'BackgroundScript',
      fileName: 'background',
    },
    rollupOptions: {
      output: {
        entryFileNames: 'background.js',
      },
    },
  },
  plugins: [],
});
