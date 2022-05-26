import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/mini_url/IndexView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: IndexView
    },
    {
      path: '/convert',
      name: 'convert',
      component: () => import('../views/mini_url/ConvertView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/mini_url/ContactView.vue')
    }
  ]
})

export default router
