<script setup lang="ts">
import type { IBreadcrumb } from './type'
withDefaults(
  defineProps<{
    breadcrumbs: IBreadcrumb[]
  }>(),
  {}
)
</script>

<template>
  <div class="breadcrumb">
    <a-breadcrumb separator=">">
      <template v-for="breadcrumb in breadcrumbs" :key="breadcrumb.name">
        <a-breadcrumb-item :href="breadcrumb.path">{{ breadcrumb.name }}</a-breadcrumb-item>
      </template>
    </a-breadcrumb>
  </div>
</template>

<style scoped lang="scss">
.breadcrumb {
  margin-left: 20px;
  font-size: 14px;
}
</style>
