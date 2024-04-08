/* eslint-disable max-classes-per-file */
export default class XHRHttpStack {
  createRequest (method, url) {
    return new Request(method, url)
  }

  getName () {
    return 'XHRHttpStack'
  }
}

class Request {
  constructor (method, url) {
    this._xhr = new XMLHttpRequest()
    // this._xhr.open(method, url, true)

    this._method = method
    this._url = url
    this._headers = {}
  }

  getMethod () {
    return this._method
  }

  getURL () {
    return this._url
  }

  setHeader (header, value) {
    // this._xhr.setRequestHeader(header, value)
    this._headers[header] = value
  }

  getHeader (header) {
    return this._headers[header]
  }

  setProgressHandler (progressHandler) {
    // Test support for progress events before attaching an event listener
    if (!('upload' in this._xhr)) {
      return
    }

    this._xhr.upload.onprogress = (e) => {
      if (!e.lengthComputable) {
        return
      }

      progressHandler(e.loaded)
    }
  }

  send (body = null) {
    return new Promise((resolve, reject) => {
      this._xhr.onload = () => {
        resolve(new Response(this._xhr))
      }

      this._xhr.onerror = (err) => {
        reject(err)
      }

      var newHeader = {}
      const qsIdx = this._url.indexOf('?')
      if (qsIdx > 0) {
        const urlSearchParams = new URLSearchParams(this._url.substring(qsIdx))
        newHeader = Object.fromEntries(urlSearchParams.entries());
        this._url = this._url.substring(0, qsIdx)
      }
      const oldHeader = this._headers
      for (const key in oldHeader) {
        if(oldHeader.hasOwnProperty(key)) {
          newHeader["Ov-"+key] = oldHeader[key]
        }
      }
      // console.log(newHeader)

      const newParams = new URLSearchParams(newHeader)
      const newUrl = this._url + '?' + newParams.toString()
      // console.log(newUrl)
      this._xhr.open(this._method, newUrl, true)
      this._xhr.send(body)
    })
  }

  abort () {
    this._xhr.abort()
    return Promise.resolve()
  }

  getUnderlyingObject () {
    return this._xhr
  }
}

class Response {
  constructor (xhr) {
    this._xhr = xhr
  }

  getStatus () {
    return this._xhr.status
  }

  getHeader (header) {
    return this._xhr.getResponseHeader(header)
  }

  getBody () {
    return this._xhr.responseText
  }

  getUnderlyingObject () {
    return this._xhr
  }
}
