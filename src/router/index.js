import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Revdoc from '../views/Revdoc.vue'
import Redl from '../views/Redl.vue'
import Vlform from '../views/Vlform'
import Vlpay from '../views/Vlpay'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Renew-drivers-licence',
    name: 'Redl',
    component : Redl
  },
  {
    path: '/Renew-vehicle-docs',
    name: 'Revdoc',
    component : Revdoc
  },
  {
    path: '/my-profile',
    name: 'Vlform',
    component : Vlform
  },
  {
    path: '/payment',
    name: 'Vlpay',
    component : Vlpay
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
