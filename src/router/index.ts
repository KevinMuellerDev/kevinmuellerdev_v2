import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/privacypolicy',
      name: 'privacypolicy',
      component: () => import('@/views/PrivacyView.vue'),
    },
    {
      path: '/imprint',
      name: 'imprint',
      component: () => import('@/views/ImpressumView.vue'),
    },

    {
      path: '/:catchAll(.*)*',
      name: 'notfound',
      component: () => import('@/views/404View.vue'),
    },
  ],
  scrollBehavior(to) {
    if (to.hash) return false
    return { top: 0 }
  },
})

export default router
