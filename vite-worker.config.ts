import { defineConfig } from 'vite'

export default defineConfig((env) => ({
  build: {
    emptyOutDir: false,
    target: 'esnext',
    outDir: 'dist',
    lib: {
      fileName: 'jassub-worker',
      entry: 'src/worker.js',
      formats: ['es']
    }
  }
}))
