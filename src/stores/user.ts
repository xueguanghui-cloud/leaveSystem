import { defineStore } from 'pinia'
import type { User } from '@/types/user'
import type { UserStore } from './type'
import type { UserMenu } from '@/compontent/menuNav/config/index'
import { mapMenusToRoutes } from '@/utils/mapMenus'
import router from '@/router'

export const userStore = defineStore('user', {
  state(): UserStore {
    return {
      userInfo: {
        id: 0,
        sno: 0,
        userName: '',
        email: '',
        deptId: '',
        gender: 0,
        phone: '',
        userAvatar: '',
        userGrade: '',
        userProfile: '',
        userRole: 'student',
        updateTime: '',
        createTime: ''
      },
      userMenus: []
    }
  },
  getters: {},
  actions: {
    setUser(userInfo: User) {
      this.userInfo = userInfo
    },
    async setUserMenus(userMenus: UserMenu[]) {
      this.userMenus = userMenus

      const routesChildren = await mapMenusToRoutes(this.userMenus)

      // 将routes => router.main.children
      routesChildren.forEach((route) => {
        if (router.hasRoute(route.name!)) return
        router.addRoute('main', route)
      })
    }
  },
  persist: {
    paths: ['userInfo', 'userMenus']
  }
})
