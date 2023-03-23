import { createRouter, createWebHistory } from 'vue-router'
import { userStore } from '@/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/:pathMetch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFound.vue')
    }
  ]
})

/* 路由拦截 */
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const isLogin = userStore().userInfo.sno
    if (!isLogin) return '/login'
  }
})

export default router
