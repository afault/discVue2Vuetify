import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import MainDashboard from '../views/MainDashboard.vue'
import KadunOfficerView from '../views/KadunOfficerView.vue'




Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'LoginView',
    component: LoginView
  },

  {
    path: '/MainDashboard',
    name: 'MainDashboard',
    component: MainDashboard
  },

  {
    path: '/KadunOfficerView',
    name: 'KadunOfficerView',
    component: KadunOfficerView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
