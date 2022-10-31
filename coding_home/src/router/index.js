import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import Index from '../pages/Index.vue'


const routes = [
  { path: '/', component: Index, redirect: '/index' },
  { path: '/index', component: Index },

]
const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes
})



export default router
