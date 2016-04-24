import Vue from 'vue'
import VueResource from 'vue-resource'
// import App from './App'

import setRouter from './router'

Vue.use(VueResource)

require('assets/css/bootstrap.min.css')
require('assets/css/font-awesome.min.css')
require('assets/css/ace.min.css')
require('assets/css/ace-rtl.min.css')

const router = setRouter(Vue)

const App = Vue.extend({})

router.start(App, '#app')
