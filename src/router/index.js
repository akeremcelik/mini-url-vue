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
      path: '/minimize',
      name: 'minimize',
      component: () => import('../views/mini_url/MinimizeView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/mini_url/ContactView.vue')
    }
  ]
})

export default router
