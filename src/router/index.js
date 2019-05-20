import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routers = [
  {
    path: '/',
    name: 'home',
    component: Home
  }
  // {
  // path: '/about',
  // name: 'about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

// 路由配置
const RouterConfig = {
  // mode: 'hash',
  routes: routers
}

export default new VueRouter(RouterConfig)
