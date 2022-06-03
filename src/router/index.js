import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/mini_url/IndexView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {title: 'Home'},
      component: IndexView
    },
    {
      path: '/minimize',
      name: 'minimize',
      meta: {title: 'Minimize'},
      component: () => import('../views/mini_url/MinimizeView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      meta: {title: 'Contact'},
      component: () => import('../views/mini_url/ContactView.vue')
    },
    {
      path: '/u/:key',
      component: () => import('../composables/useRedirect.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'pageNotFound',
      meta: {title: 'Page Not Found'},
      component: () => import('../views/PageNotFoundView.vue')
    },
  ]
})

const defaultTitle = 'Mini URL';
router.beforeEach((to, from, next) => {
  document.title = to.meta.title ?? defaultTitle
  next();
});

export default router
