// @ts-ignore
import WASMModule from 'jassub'

/* global Module, HEAPU8, _malloc, buffer */
const read_ = (url, ab) => {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', url, false)
  xhr.responseType = ab ? 'arraybuffer' : 'text'
  xhr.send(null)
  return xhr.response
}
const readAsync = (url, onload, onerror) => {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', url, true)
  xhr.responseType = 'arraybuffer'
  xhr.onload = () => {
    if ((xhr.status === 200 || xhr.status === 0) && xhr.response) {
      onload(xhr.response)
      return
    }
    onerror()
  }
  xhr.onerror = onerror
  xhr.send(null)
}
// eslint-disable-next-line no-global-assign
// Module = {
//   wasm: !WebAssembly.instantiateStreaming && read_('jassub-worker.wasm', true)
// }
// console.log('Module', Module)

self.ready = () => {
  // self.jassubObj = new Module.JASSUB(self.width, self.height, self.fallbackFont || null)

  if (self.fallbackFont) self.findAvailableFonts(self.fallbackFont)

  if (!self.subContent) self.subContent = read_(self.subUrl)

  self.processAvailableFonts(self.subContent)

  for (const font of self.fontFiles || []) self.asyncWrite(font)

  self.jassubObj.createTrackMem(self.subContent)
  self.jassubObj.setDropAnimations(self.dropAllAnimations)

  if (self.libassMemoryLimit > 0 || self.libassGlyphLimit > 0) {
    self.jassubObj.setMemoryLimits(self.libassGlyphLimit, self.libassMemoryLimit)
  }
}

self.out = text => {
  if (text === 'libass: No usable fontconfig configuration file found, using fallback.') {
    console.debug(text)
  } else {
    console.log(text)
  }
}
self.err = text => {
  if (text === 'Fontconfig error: Cannot load default config file: No such file: (null)') {
    console.debug(text)
  } else {
    console.error(text)
  }
}

self.delay = 0 // approximate delay (time of render + postMessage + drawImage), for example 1/60 or 0
self.lastCurrentTime = 0
self.rate = 1
self.rafId = null
self.nextIsRaf = false
self.lastCurrentTimeReceivedAt = Date.now()
self.targetFps = 24
self.libassMemoryLimit = 0 // in MiB
self.dropAllAnimations = false

self.width = 0
self.height = 0

self.fontMap_ = {}
self.fontId = 0

let asyncRender = false

self.addFont = (data) => {
  self.asyncWrite(data.font)
}

self.findAvailableFonts = (font) => {
  font = font.trim().toLowerCase()

  if (font.startsWith('@')) {
    font = font.substring(1)
  }

  if (self.fontMap_[font]) return

  self.fontMap_[font] = true

  if (!self.availableFonts[font]) {
    if (self.useLocalFonts) {
      postMessage({ target: 'getLocalFont', font })
    }
    return
  }

  self.asyncWrite(self.availableFonts[font])
}

self.asyncWrite = (font) => {
  if (ArrayBuffer.isView(font)) {
    self.allocFont(font)
  } else {
    readAsync(font, fontData => {
      self.allocFont(new Uint8Array(fontData))
    }, console.error)
  }
}

// TODO: this should re-draw last frame!
self.allocFont = (uint8) => {
  const ptr = Module._malloc(uint8.byteLength)
  Module.HEAPU8.set(uint8, ptr)
  self.jassubObj.addFont('font-' + (self.fontId++), ptr, uint8.byteLength)
  self.jassubObj.reloadFonts()
}

self.processAvailableFonts = (content) => {
  if (!self.availableFonts) return

  const sections = parseAss(content)

  for (let i = 0; i < sections.length; i++) {
    for (let j = 0; j < sections[i].body.length; j++) {
      if (sections[i].body[j].key === 'Style') {
        self.findAvailableFonts(sections[i].body[j].value.Fontname)
      }
    }
  }

  const regex = /\\fn([^\\}]*?)[\\}]/g
  let matches
  while ((matches = regex.exec(self.subContent)) !== null) {
    self.findAvailableFonts(matches[1])
  }
}
/**
 * Set the subtitle track.
 * @param {!string} content the content of the subtitle file.
 */
self.setTrack = (data) => {
  // Make sure that the fonts are loaded
  self.processAvailableFonts(data.content)

  self.subContent = data.content

  // Tell libass to render the new track
  self.jassubObj.createTrackMem(self.subContent)
  self.renderLoop()
}

/**
 * Remove subtitle track.
 */
self.freeTrack = () => {
  self.jassubObj.removeTrack()
  self.renderLoop()
}

/**
 * Set the subtitle track.
 * @param {!string} url the URL of the subtitle file.
 */
self.setTrackByUrl = (data) => {
  const content = read_(data.url)

  self.setTrack({ content })
}

self.resize = (width, height) => {
  self.width = width
  self.height = height
  self.jassubObj.resizeCanvas(width, height)
}

self.getCurrentTime = () => {
  const diff = (Date.now() - self.lastCurrentTimeReceivedAt) / 1000
  if (self._isPaused) {
    return self.lastCurrentTime
  } else {
    if (diff > 5) {
      console.error('Didn\'t received currentTime > 5 seconds. Assuming video was paused.')
      self.setIsPaused(true)
    }
    return self.lastCurrentTime + (diff * self.rate)
  }
}
self.setCurrentTime = (currentTime) => {
  self.lastCurrentTime = currentTime
  self.lastCurrentTimeReceivedAt = Date.now()
  if (!self.rafId) {
    if (self.nextIsRaf) {
      self.rafId = self.requestAnimationFrame(self.renderLoop)
    } else {
      self.renderLoop()

      // Give onmessage chance to receive all queued messages
      setTimeout(() => {
        self.nextIsRaf = false
      }, 20)
    }
  }
}

self._isPaused = true
self.setIsPaused = (isPaused) => {
  if (isPaused !== self._isPaused) {
    self._isPaused = isPaused
    if (isPaused) {
      if (self.rafId) {
        clearTimeout(self.rafId)
        self.rafId = null
      }
    } else {
      self.lastCurrentTimeReceivedAt = Date.now()
      self.rafId = self.requestAnimationFrame(self.renderLoop)
    }
  }
}

self.renderImageData = (time, force) => {
  const renderStartTime = Date.now()
  let result = null
  if (self.blendMode === 'wasm') {
    result = self.jassubObj.renderBlend(time, force)
    if (result) {
      result.times = {
        renderTime: Date.now() - renderStartTime - (result && result.time) | 0,
        blendTime: (result && result.time) | 0
      }
    }
  } else {
    result = self.jassubObj.renderImage(time, force)
    if (result) {
      result.times = {
        renderTime: Date.now() - renderStartTime - (result && result.time) | 0,
        cppDecodeTime: (result && result.time) | 0
      }
    }
  }
  return result
}

self.processRender = (result) => {
  const images = []
  let buffers = []
  const decodeStartTime = Date.now()
  // use callback to not rely on async/await
  if (asyncRender) {
    const promises = []
    for (let image = result; image.changed; image = image.next) {
      if (image.image) {
        images.push({ w: image.w, h: image.h, x: image.x, y: image.y })
        promises.push(createImageBitmap(new ImageData(new Uint8ClampedArray(Module.HEAPU8).subarray(image.image, image.image + image.w * image.h * 4), image.w, image.h)))
      }
    }
    Promise.all(promises).then(bitmaps => {
      for (let i = 0; i < images.length; i++) {
        images[i].image = bitmaps[i]
      }
      buffers = bitmaps
      self.paintImages({ images, buffers, times: result.times, decodeStartTime })
    })
  } else {
    for (let image = result; image.ptr !== 0; image = image.next) {
      if (image.image) {
        const img = { w: image.w, h: image.h, x: image.x, y: image.y, image: image.image }
        if (!self.offscreenCanvasCtx) {
          const buf = buffer.slice(image.image, image.image + image.w * image.h * 4)
          buffers.push(buf)
          img.image = buf
        }
        images.push(img)
      }
    }
    self.paintImages({ images, buffers, times: result.times, decodeStartTime })
  }
}

self.render = (time, force) => {
  const result = self.renderImageData(time, force)
  if (result.changed !== 0 || force) {
    self.processRender(result)
  } else {
    postMessage({
      target: 'unbusy'
    })
  }
}

self.demand = data => {
  self.lastCurrentTime = data.time
  self.render(data.time)
}

self.renderLoop = (force) => {
  self.rafId = 0
  self.renderPending = false
  self.render(self.getCurrentTime() + self.delay, force)
  if (!self._isPaused) {
    self.rafId = self.requestAnimationFrame(self.renderLoop)
  }
}

self.paintImages = (data) => {
  data.times.decodeTime = Date.now() - data.decodeStartTime
  if (self.offscreenCanvasCtx) {
    const drawStartTime = Date.now()
    // force updates
    self.offscreenCanvas.width = self.width
    if (self.offscreenCanvas.height !== self.height) {
      self.offscreenCanvas.height = self.height
    } else {
      self.offscreenCanvasCtx.clearRect(0, 0, self.width, self.height)
    }
    for (const image of data.images) {
      if (image.image) {
        if (asyncRender) {
          self.offscreenCanvasCtx.drawImage(image.image, image.x, image.y)
          image.image.close()
        } else {
          self.bufferCanvas.width = image.w
          self.bufferCanvas.height = image.h
          self.bufferCtx.putImageData(new ImageData(new Uint8ClampedArray(Module.HEAPU8).subarray(image.image, image.image + image.w * image.h * 4), image.w, image.h), 0, 0)
          self.offscreenCanvasCtx.drawImage(self.bufferCanvas, image.x, image.y)
        }
      }
    }
    if (self.debug) {
      data.times.drawTime = Date.now() - drawStartTime
      let total = 0
      for (const key in data.times) total += data.times[key]
      console.log('Bitmaps: ' + data.images.length + ' Total: ' + Math.round(total) + 'ms', data.times)
    }
    postMessage({
      target: 'unbusy'
    })
  } else {
    postMessage({
      target: 'render',
      async: asyncRender,
      images: data.images,
      times: data.times,
      width: self.width,
      height: self.height
    }, data.buffers)
  }
}

/**
 * Parse the content of an .ass file.
 * @param {!string} content the content of the file
 */
const parseAss = content => {
  let m, format, lastPart, parts, key, value, tmp, i, j, body
  const sections = []
  const lines = content.split(/[\r\n]+/g)
  for (i = 0; i < lines.length; i++) {
    m = lines[i].match(/^\[(.*)\]$/)
    if (m) {
      format = null
      sections.push({
        name: m[1],
        body: []
      })
    } else {
      if (/^\s*$/.test(lines[i])) continue
      if (sections.length === 0) continue
      body = sections[sections.length - 1].body
      if (lines[i][0] === ';') {
        body.push({
          type: 'comment',
          value: lines[i].substring(1)
        })
      } else {
        parts = lines[i].split(':')
        key = parts[0]
        value = parts.slice(1).join(':').trim()
        if (format || key === 'Format') {
          value = value.split(',')
          if (format && value.length > format.length) {
            lastPart = value.slice(format.length - 1).join(',')
            value = value.slice(0, format.length - 1)
            value.push(lastPart)
          }
          value = value.map(s => {
            return s.trim()
          })
          if (format) {
            tmp = {}
            for (j = 0; j < value.length; j++) {
              tmp[format[j]] = value[j]
            }
            value = tmp
          }
        }
        if (key === 'Format') {
          format = value
        }
        body.push({
          key,
          value
        })
      }
    }
  }

  return sections
}

self.requestAnimationFrame = (() => {
  // similar to Browser.requestAnimationFrame
  let nextRAF = 0
  return func => {
    // try to keep target fps (30fps) between calls to here
    const now = Date.now()
    if (nextRAF === 0) {
      nextRAF = now + 1000 / self.targetFps
    } else {
      while (now + 2 >= nextRAF) { // fudge a little, to avoid timer jitter causing us to do lots of delay:0
        nextRAF += 1000 / self.targetFps
      }
    }
    const delay = Math.max(nextRAF - now, 0)
    return setTimeout(func, delay)
    // return setTimeout(func, 1);
  }
})()

// Frame throttling

// buffer messages until the program starts to run

let messageBuffer = null
let messageResenderTimeout = null

const messageResender = () => {
  if (self.jassubObj) {
    if (messageBuffer && messageBuffer.length > 0) {
      messageResenderTimeout = null
      messageBuffer.forEach(message => {
        onmessage(message)
      })
      messageBuffer = null
    }
  } else {
    messageResenderTimeout = setTimeout(messageResender, 50)
  }
}

const _applyKeys = (input, output) => {
  const vargs = Object.keys(input)

  for (let i = 0; i < vargs.length; i++) {
    output[vargs[i]] = input[vargs[i]]
  }
}

self.init = async data => {
  self.publicPath = data.publicPath
  self.width = data.width
  self.height = data.height
  self.subUrl = data.subUrl
  self.subContent = data.subContent
  self.fontFiles = data.fonts
  self.fallbackFont = data.fallbackFont.toLowerCase()
  self.blendMode = data.blendMode
  asyncRender = data.asyncRender
  self.onDemandRender = data.onDemandRender
  self.dropAllAnimations = !!data.dropAllAnimations || self.dropAllAnimations
  // Force fallback if engine does not support 'lossy' mode.
  // We only use createImageBitmap in the worker and historic WebKit versions supported
  // the API in the normal but not the worker scope, so we can't check this earlier.
  if (asyncRender && typeof createImageBitmap === 'undefined') {
    asyncRender = false
    console.error("'createImageBitmap' needed for 'asyncRender' unsupported!")
  }

  self.availableFonts = data.availableFonts
  self.debug = data.debug
  self.targetFps = data.targetFps || self.targetFps
  self.libassMemoryLimit = data.libassMemoryLimit || self.libassMemoryLimit
  self.libassGlyphLimit = data.libassGlyphLimit || 0
  self.useLocalFonts = data.useLocalFonts
  
  globalThis.Module = await WASMModule({
    locateFile: (path) => `${publicPath}${path.replace('/dist', '')}`
  })

  console.log('Module', Module)

  self.jassubObj = new Module.JASSUB(self.width, self.height, self.fallbackFont || null)
  
  if (self.fallbackFont) self.findAvailableFonts(self.fallbackFont)

  if (!self.subContent) self.subContent = read_(self.subUrl)

  self.processAvailableFonts(self.subContent)

  for (const font of self.fontFiles || []) self.asyncWrite(font)

  self.jassubObj.createTrackMem(self.subContent)
  self.jassubObj.setDropAnimations(self.dropAllAnimations)

  if (self.libassMemoryLimit > 0 || self.libassGlyphLimit > 0) {
    self.jassubObj.setMemoryLimits(self.libassGlyphLimit, self.libassMemoryLimit)
  }

  postMessage({
    target: 'ready'
  })
}

self.canvas = data => {
  if (data.width == null) throw new Error('Invalid canvas size specified')
  self.resize(data.width, data.height, data.force)
  if (data.force) self.render(self.lastCurrentTime)
}

self.video = data => {
  if (data.currentTime != null) self.setCurrentTime(data.currentTime)
  if (data.isPaused != null) self.setIsPaused(data.isPaused)
  self.rate = data.rate || self.rate
}

self.offscreenCanvas = data => {
  self.offscreenCanvas = data.transferable[0]
  self.offscreenCanvasCtx = self.offscreenCanvas.getContext('2d', { desynchronized: true })
  if (!asyncRender) {
    self.bufferCanvas = new OffscreenCanvas(self.height, self.width)
    self.bufferCtx = self.bufferCanvas.getContext('2d', { desynchronized: true })
  }
}

self.destroy = () => {
  self.jassubObj.quitLibrary()
}

self.createEvent = data => {
  _applyKeys(data.event, self.jassubObj.getEvent(self.jassubObj.allocEvent()))
}

self.getEvents = () => {
  const events = []
  for (let i = 0; i < self.jassubObj.getEventCount(); i++) {
    const { Start, Duration, ReadOrder, Layer, Style, MarginL, MarginR, MarginV, Name, Text, Effect } = self.jassubObj.getEvent(i)
    events.push({ Start, Duration, ReadOrder, Layer, Style, MarginL, MarginR, MarginV, Name, Text, Effect })
  }
  postMessage({
    target: 'getEvents',
    events
  })
}

self.setEvent = data => {
  _applyKeys(data.event, self.jassubObj.getEvent(data.index))
}

self.removeEvent = data => {
  self.jassubObj.removeEvent(data.index)
}

self.createStyle = data => {
  _applyKeys(data.style, self.jassubObj.getStyle(self.jassubObj.allocStyle()))
}

self.getStyles = () => {
  const styles = []
  for (let i = 0; i < self.jassubObj.getStyleCount(); i++) {
    // eslint-disable-next-line camelcase
    const { Name, FontName, FontSize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding, treat_fontname_as_pattern, Blur, Justify } = self.jassubObj.getStyle(i)
    // eslint-disable-next-line camelcase
    styles.push({ Name, FontName, FontSize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding, treat_fontname_as_pattern, Blur, Justify })
  }
  postMessage({
    target: 'getStyles',
    time: Date.now(),
    styles
  })
}

self.setStyle = data => {
  _applyKeys(data.style, self.jassubObj.getStyle(data.index))
}

self.removeStyle = data => {
  self.jassubObj.removeStyle(data.index)
}

onmessage = message => {
  if (!self.jassubObj && !message.data.preMain) {
    if (!messageBuffer) {
      messageBuffer = []
      messageResenderTimeout = setTimeout(messageResender, 50)
    }
    messageBuffer.push(message)
    return
  }
  if (self.jassubObj && messageResenderTimeout) {
    clearTimeout(messageResenderTimeout)
    messageResender()
  }
  const data = message.data
  if (self[data.target]) {
    self[data.target](data)
  } else {
    throw new Error('Unknown event target ' + message.data.target)
  }
}

let HEAPU8C = null

// patch EMS function to include Uint8Clamped, but call old function too
self.updateGlobalBufferAndViews = (_super => {
  return buf => {
    _super(buf)
    HEAPU8C = new Uint8ClampedArray(buf)
  }
})(self.updateGlobalBufferAndViews)
