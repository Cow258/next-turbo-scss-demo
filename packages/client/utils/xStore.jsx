import { isBrowser, isServer } from './xCm'

const myStore = {
  data: {},
  getItem(key) {
    return this.data[key]
  },
  setItem(key, val) {
    this.data[key] = val
  },
  removeItem(key) {
    if (key in this.data) delete this.data[key]
  },
}

const xStore = {
  hasError: false,
  getStore() {
    try {
      if (this.hasError || isServer) return myStore
      return window.localStorage
    } catch (error) {
      this.hasError = true
      return myStore
    }
  },
  getItem(key) {
    try {
      return this.getStore().getItem(key)
    } catch (error) {
      this.hasError = true
      return this.getStore().getItem(key)
    }
  },
  setItem(key, val) {
    try {
      return this.getStore().setItem(key, val)
    } catch (error) {
      this.hasError = true
      return this.getStore().setItem(key, val)
    }
  },
  removeItem(key) {
    try {
      return this.getStore().removeItem(key)
    } catch (error) {
      this.hasError = true
      return this.getStore().removeItem(key)
    }
  },
}

export default xStore
if (isBrowser) {
  window.xStore = xStore
}
