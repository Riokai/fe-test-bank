import Storage from 'services/storage'
import Vue from 'vue'

export function isLogin () {
  const token = Storage.get('token')

  return !!token
}

export function authHeader () {
  const token = Storage.get('token')

  Vue.http.headers.common['Token'] = token
}
