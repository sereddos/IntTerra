import Vue from 'vue'
import VueRouter from 'vue-router'
import Operations from '../views/Operations.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Operations',
    component: Operations
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
