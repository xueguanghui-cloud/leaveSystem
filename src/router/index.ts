import { createRouter, createWebHashHistory } from 'vue-router'
import { userStore } from '@/stores/user'
import { constuserMenuList } from '@/compontent/menuNav/config'

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
      meta: { title: '首页' },
      component: () => import('@/views/HomeView.vue'),
      children: [
        {
          path: '/main/leaveorsale/leave',
          name: 'leave',
          meta: {
            title: '请假页'
          },
          component: () => import('@/views/main/leaveorsale/leave/leave.vue')
        },
        {
          path: '/main/leaveorsale/sale',
          name: 'sale',
          meta: {
            title: '销假页'
          },
          component: () => import('@/views/main/leaveorsale/sale/sale.vue')
        },
        {
          path: '/main/approval/leave',
          name: 'approval-leave',
          meta: {
            title: '请假审批'
          },
          component: () => import('@/views/main/approval/leave/leave.vue')
        },
        {
          path: '/main/approval/sale',
          name: 'approval-sale',
          meta: {
            title: '销假审批'
          },
          component: () => import('@/views/main/approval/sale/sale.vue')
        },
        {
          path: '/main/userlist/student',
          name: 'student',
          meta: {
            title: '学生列表'
          },
          component: () => import('@/views/main/userlist/student/student.vue')
        },
        {
          path: '/main/userlist/teacher',
          name: 'teacher',
          meta: {
            title: '职工列表'
          },
          component: () => import('@/views/main/userlist/teacher/teacher.vue')
        },
        {
          path: '/main/user/userCenter',
          name: 'userCenter',
          meta: {
            title: '个人中心'
          },
          component: () => import('@/views/main/user/userCenter/userCenter.vue')
        },
        {
          path: '/main/user/userSet',
          name: 'userSet',
          meta: {
            title: '个人设置'
          },
          component: () => import('@/views/main/user/userSet/userSet.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      meta: { title: '登录' },
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
  if (to.path === '/main') {
    // 跳转到首页
    router.push(constuserMenuList[userStore().userInfo.userRole][0]!.children![0].path!)
  }
})

export default router
