<script setup lang="ts">
import { constuserMenuList } from './config/index'
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
</script>

<template>
  <a-layout-sider :collapsed="collapsed" :trigger="null" collapsible>
    <div class="logo">
      <RouterLink to="/">
        <div>
          <img src="@/assets/logo.svg" alt="" />
          <h1 v-show="!collapsed">Ant Design Pro</h1>
        </div>
      </RouterLink>
    </div>
    <a-menu theme="dark" mode="inline">
      <template
        v-for="userMenu in constuserMenuList[storeUser.userInfo.userRole]"
        :key="userMenu.id"
      >
        <a-sub-menu v-if="userMenu.type === 1" :title="userMenu.menuName">
          <a-menu-item v-for="item in userMenu.children" :key="item.id">
            {{ item.menuName }}
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item v-else-if="userMenu.type === 2" :key="userMenu.id">{{
          userMenu.menuName
        }}</a-menu-item>
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
