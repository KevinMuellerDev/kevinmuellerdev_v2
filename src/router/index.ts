import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PrivacyView from '@/views/PrivacyView.vue'
import ImpressumView from '@/views/ImpressumView.vue'

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
      component: PrivacyView,
    },
    {
      path: '/imprint',
      name: 'imprint',
      component: ImpressumView,
    },
  ],
})

export default router
