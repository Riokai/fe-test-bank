import Vue from 'vue'
import { API } from '../data'

const HOST = 'http://121.42.216.103/testbank'

// let container = {}

function getAPI (api) {
  return `${HOST}${api}`
}

export function login (data) {
  return Vue.http.post(getAPI(API.login), data)
}
