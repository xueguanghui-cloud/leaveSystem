<script setup lang="ts">
import router from '@/router'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  LoginOutlined
} from '@ant-design/icons-vue'
import { userStore } from '@/stores/user'
import breadcrumb from '@/compontent/breadcrumb/breadcrumb.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { pathMaptoBreadcrumbs } from '@/utils/mapMenus'
const storeUser = userStore()
const emit = defineEmits(['setCollapsed'])
const props = withDefaults(
  defineProps<{
    collapsed: boolean
  }>(),
  {
    collapsed: false
  }
)

const setCollapsed = () => {
  emit('setCollapsed', !props.collapsed)
}

const breadcrumbs = computed(() => {
  const userMenus = storeUser.userMenus
  const route = useRoute()
  const currentPath = route.path
  return pathMaptoBreadcrumbs(userMenus, currentPath)
})

const logout = () => {
  // 清空用户信息
  storeUser.setUser({
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
  })
  router.push('/login')
}
</script>

<template>
  <a-layout-header style="background: #fff; padding: 0">
    <div class="collapsedIcon">
      <menu-unfold-outlined
        :style="{ fontSize: '16px' }"
        v-if="collapsed"
        class="trigger"
        @click="setCollapsed"
      />
      <menu-fold-outlined
        :style="{ fontSize: '16px' }"
        v-else
        class="trigger"
        @click="setCollapsed"
      />

      <div class="content">
        <breadcrumb :breadcrumbs="breadcrumbs"></breadcrumb>
      </div>
    </div>
    <a-dropdown>
      <div class="info">
        <img :src="storeUser.userInfo.userAvatar" alt="" />
        <span style="cursor: pointer">{{ storeUser.userInfo.userName }}</span>
      </div>
      <template #overlay>
        <a-menu>
          <a-menu-item key="0">
            <user-outlined />
            <RouterLink to="/main/user/userCenter"> 个人信息 </RouterLink>
          </a-menu-item>
          <a-menu-item key="1" @click="logout">
            <login-outlined />
            <a target="_blank" rel="noopener noreferrer"> 退出登录</a>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </a-layout-header>
</template>

<style scoped lang="scss">
.ant-layout-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px !important;
  .collapsedIcon {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .info {
    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      margin-right: 10px;
    }
    span {
      font-size: 14px;
      font-weight: 600;
    }
  }
}
</style>
