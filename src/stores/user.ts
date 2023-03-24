import { defineStore } from 'pinia'
import type { User } from '@/types/user'
import type { UserStore } from './type'
import { constuserMenuList } from '@/compontent/menuNav/config/index'

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
      this.userMenus = constuserMenuList[userInfo.userRole]
    }
  },
  persist: {
    paths: ['userInfo', 'userMenus']
  }
})
