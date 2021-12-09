import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: 'main'},
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/warehouse/:url',
    name: 'Town',
    meta: {layout: 'main'},
    component: () => import('../views/Town.vue'),
    props: true
  },
  {
    path: '/404',
    name: '404',
    meta: {layout: 'empty'},
    component: () => import('../views/404.vue')
  },
  { path: '*',
   redirect: "/404" 
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
