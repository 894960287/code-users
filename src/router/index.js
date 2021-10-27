import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/Login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
    // component: () => import('../components/Login.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
