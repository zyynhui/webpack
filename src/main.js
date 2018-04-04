import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//引入element-ui
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element, { size: 'small' })

import axios from 'axios'
axios.defaults.baseURL= 'http://192.168.0.64:8081'
Vue.prototype.$http = axios


import App from './components/app.vue'

import router from './router.js'

const vm = new Vue({
  el: '#app',
  render: c => c(App), 
  router

})
