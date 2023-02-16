const { writeFile } = require('fs').promises
const { build } = require('vite')

;(async () => {
  await writeFile('./dist/package.json', JSON.stringify({"name": "jassub","main": "js/jassub-worker.js"}))

  await build({
      build: {
        emptyOutDir: false,
        target: 'esnext',
        outDir: 'dist',
        lib: {
          fileName: 'jassub-worker',
          entry: 'src/worker.js',
          formats: ['es'],
          fileName: () => `jassub-worker.js`
        }
      }
  })

  await writeFile('./dist/package.json', JSON.stringify({"name": "jassub","main": "js/jassub-worker-legacy.js"}))

  await build({
      build: {
        emptyOutDir: false,
        target: 'esnext',
        outDir: 'dist',
        lib: {
          fileName: 'jassub-worker-legacy',
          entry: 'src/worker.js',
          formats: ['es'],
          fileName: () => `jassub-worker-legacy.js`
        }
      }
  })
  await writeFile('./dist/package.json', JSON.stringify({"name": "jassub","main": "js/jassub-worker.js"}))
})()
