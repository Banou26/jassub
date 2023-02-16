const { writeFile, rm } = require('fs').promises

if (process.argv[2] === '-c') {
  rm('./dist/package.json')
} else if (process.argv[2] === '-2') {
  writeFile('./dist/package.json', JSON.stringify({"name": "jassub-wasm","main": "js/jassub-worker-legacy.js"}))
} else {
  writeFile('./dist/package.json', JSON.stringify({"name": "jassub-wasm","main": "js/jassub-worker.js"}))
}