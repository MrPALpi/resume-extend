import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import ('../views/HomeView.vue')
    },
    {
      path: '/pattern',
      name: 'pattern',
      // component: () => import('../views/PatternView.vue')
      component: () => import('../views/PatternView.vue')
    },
    {
      path: '/@:name',
      name: 'account',
      component: () => import('../views/AccountView.vue')
    }
  ]
})

export default router
