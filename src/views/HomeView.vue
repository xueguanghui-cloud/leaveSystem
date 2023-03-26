<script setup lang="ts">
import { ref } from 'vue'

import menuNav from '@/compontent/menuNav/menuNav.vue'
import headerNav from '@/compontent/headerNav/headerNav.vue'

const collapsed = ref(false)
const setCollapsedProp = (value: boolean) => {
  collapsed.value = value
}
</script>
<template>
  <div class="homeView">
    <a-layout>
      <menuNav :collapsed="collapsed"></menuNav>
      <a-layout>
        <headerNav :collapsed="collapsed" @setCollapsed="setCollapsedProp"></headerNav>
        <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
        >
          <RouterView></RouterView>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<style scoped lang="scss">
.homeView {
  width: 100%;
  height: 100%;
  .ant-layout {
    width: 100%;
    height: 100%;
    .ant-layout-content {
      overflow-y: scroll;
    }
  }
}
</style>
