import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'

import setRouter from './router'

import BankTitle from 'components/Title'
import BankHeader from 'components/Header'
import BankSidebar from 'components/Sidebar'
import BankSidebarShortcut from 'components/SidebarShortcut'
import BankSidebarCollapse from 'components/SidebarCollapse'
import BankBreadcrumb from 'components/Breadcrumb'
import {tab as BankTab, tabset as BankTabset} from 'vue-strap'

Vue.use(VueResource)

Vue.component('bank-title', BankTitle)
Vue.component('bank-header', BankHeader)
Vue.component('bank-sidebar', BankSidebar)
Vue.component('bank-sidebar-shortcut', BankSidebarShortcut)
Vue.component('bank-sidebar-collapse', BankSidebarCollapse)
Vue.component('bank-breadcrumb', BankBreadcrumb)
Vue.component('bank-tab', BankTab)
Vue.component('bank-tab-set', BankTabset)

require('assets/css/bootstrap.min.css')
require('assets/css/font-awesome.min.css')
require('assets/css/ace.min.css')
require('assets/css/ace-rtl.min.css')

const router = setRouter(Vue)

// const App = Vue.extend({})

router.start(App, '#app')
