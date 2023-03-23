import { defineStore } from 'pinia'
import type { User } from '@/types/user'
import type { UserStore } from './type'
import { mapMenusToRoutes } from '@/utils/mapMenus'
import { constuserMenuList } from '@/compontent/menuNav/config/index'
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
      }
    }
  },
  getters: {},
  actions: {
    setUser(userInfo: User) {
      this.userInfo = userInfo
      const routes = mapMenusToRoutes(constuserMenuList[this.userInfo.userRole])
      // 将routes => router.main.children

      routes.forEach((route) => {
        router.addRoute('home', route)
      })
    }
  },
  persist: {
    paths: ['userInfo']
  }
})
