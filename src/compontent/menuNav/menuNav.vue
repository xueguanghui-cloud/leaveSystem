<script setup lang="ts">
import router from '@/router'
import { constuserMenuList } from './config/index'
import type { UserMenu } from './config/index'

import { userStore } from '@/stores/user'

import { ref } from 'vue'

withDefaults(
  defineProps<{
    collapsed: boolean
  }>(),
  {
    collapsed: false
  }
)
const storeUser = userStore()

const selectedKeys = ref<string[]>(['1'])

// 事件处理
const handleMenuItemClick = (item: UserMenu) => {
  router.push({
    path: item.path ?? '/not-found'
  })
}
</script>

<template>
  <a-layout-sider :collapsed="collapsed" :trigger="null" collapsible>
    <div class="logo">
      <RouterLink to="/">
        <div>
          <img src="@/assets/logo.svg" alt="" />
          <h1 v-show="!collapsed">学生管理系统</h1>
        </div>
      </RouterLink>
    </div>
    <a-menu theme="dark" mode="inline">
      <template
        v-for="userMenu in constuserMenuList[storeUser.userInfo.userRole]"
        :key="userMenu.id"
      >
        <template v-if="userMenu.type === 1">
          <a-sub-menu :title="userMenu.menuName" :key="userMenu.id">
            <template #icon>
              <icon-font class="iconfont" :type="userMenu.icon" />
            </template>
            <a-menu-item
              v-for="item in userMenu.children"
              :key="item.id"
              @click="handleMenuItemClick(item)"
            >
              <template #icon>
                <icon-font class="iconfont" :type="item.icon" />
              </template>
              {{ item.menuName }}
            </a-menu-item>
          </a-sub-menu>
        </template>
        <template v-else-if="userMenu.type === 2">
          <a-menu-item :key="userMenu.id" @click="handleMenuItemClick(userMenu)">
            <template #icon>
              <icon-font class="iconfont" :type="userMenu.icon" />
            </template>
            {{ userMenu.menuName }}
          </a-menu-item>
        </template>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<style scoped lang="scss">
.ant-layout-sider {
  .logo {
    height: 64px;
    line-height: 64px;
    overflow: hidden;
    background: #001529;
    transition: all 0.3s;
    a div {
      width: 100%;
      height: 100%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 32px;
        height: 32px;
      }
      h1 {
        color: #fff;
        font-size: 18px;
        margin: 0 0 0 12px;
        font-weight: 600;
        vertical-align: middle;
        font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      }
    }
  }
}
</style>
