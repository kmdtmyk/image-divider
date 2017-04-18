import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'
import Divide from './Divide'
import Combine from './Combine'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', component: App,
    children: [
      { path: 'divide', component: Divide },
      { path: 'combine', component: Combine },
    ],
  },
]
const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#app')
