import { writeFile, rm } from 'fs/promises'
import { build } from 'vite'


;(async () => {
  await writeFile('./dist/package.json', JSON.stringify({"name": "jassub","main": "js/jassub-worker.js"}))

  await build({
      build: {
        emptyOutDir: false,
        target: 'esnext',
        outDir: 'dist',
        lib: {
          fileName: 'jassub-worker',
          entry: 'src/worker.js'
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
          entry: 'src/worker.js'
        }
      }
  })
  await writeFile('./dist/package.json', JSON.stringify({"name": "jassub","main": "js/jassub-worker.js"}))
})()
