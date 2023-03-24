import { createRouter, createWebHashHistory } from 'vue-router'
import { userStore } from '@/stores/user'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: 'main'
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('@/views/HomeView.vue'),
      children: [
        {
          path: '/main/leaveorsale/leave',
          name: 'leave',
          component: () => import('@/views/main/leaveorsale/leave/leave.vue')
        },
        {
          path: '/main/leaveorsale/sale',
          name: 'sale',
          component: () => import('@/views/main/leaveorsale/sale/sale.vue')
        },
        {
          path: '/main/approval/leave',
          name: 'leave',
          component: () => import('@/views/main/approval/leave/leave.vue')
        },
        {
          path: '/main/approval/sale',
          name: 'sale',
          component: () => import('@/views/main/approval/sale/sale.vue')
        },
        {
          path: '/main/userlist/student',
          name: 'student',
          component: () => import('@/views/main/userlist/student/student.vue')
        },
        {
          path: '/main/userlist/teacher',
          name: 'teacher',
          component: () => import('@/views/main/userlist/teacher/teacher.vue')
        },
        {
          path: '/main/user/userCenter',
          name: 'userCenter',
          component: () => import('@/views/main/user/userCenter/userCenter.vue')
        },
        {
          path: '/main/user/userSet',
          name: 'userSet',
          component: () => import('@/views/main/user/userSet/userSet.vue')
        }
      ]
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
router.beforeEach(async (to) => {
  if (to.path !== '/login') {
    const isLogin = userStore().userInfo.sno
    if (!isLogin) return '/login'
  }
})

export default router
