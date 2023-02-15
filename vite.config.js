import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: 'src/jassub.js',
      name: 'JASSUB',
      fileName: (format) => `jassub.${format}.js`
    }
  }
})
