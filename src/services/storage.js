class LocalStorage {
  get (key, defaultValue = '') {
    return window.localStorage.getItem(key) || defaultValue
  }

  set (key, value) {
    window.localStorage.setItem(key, value)
  }

  del (key) {
    window.localStorage.removeItem(key)
  }

  setObj (key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  getObj (key) {
    return JSON.parse(window.localStorage.getItem(key) || '{}')
  }

}

export default new LocalStorage()
