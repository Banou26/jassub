const { defineConfig } = require('vite')

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    lib: {
      entry: 'src/jassub.js',
      name: 'JASSUB',
      formats: ['umd', 'es'],
      fileName: (format) => `jassub.${format}.js`
    }
  }
})
