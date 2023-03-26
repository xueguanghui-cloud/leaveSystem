<script setup lang="ts">
import { ref } from 'vue'
import LSForm from '@/baseUI/form'
import type { Form } from '@/baseUI/form'

const props = withDefaults(
  defineProps<{
    searchFormConfig: Form
  }>(),
  {}
)

const emits = defineEmits(['resetBtnClick', 'searchBtnClick'])

// 双向绑定的属性应该是有配置文件中的field来决定的
// 1. 优化一:formData中的属性应该动态来决定
const formItems = props.searchFormConfig.formItems ?? []

const formOriginData: any = {}
for (const item of formItems) {
  formOriginData[item.field] = null
}
const formData = ref(formOriginData)

// 2.优化二: 当用户点击重置
const handleResetClick = () => {
  for (const key in formOriginData) {
    formData.value[key] = formOriginData[key]
  }
  emits('resetBtnClick')
}

// 3. 优化三：当用户点击查询
const handleSearchClick = () => {
  emits('searchBtnClick', formData.value)
}
</script>

<template>
  <div class="pageSearch">
    <LSForm v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1>高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <a-button type="warning" @click="handleResetClick">重置</a-button>
          <a-button type="primary" @click="handleSearchClick">查询</a-button>
        </div>
      </template>
    </LSForm>
  </div>
</template>

<style scoped lang="scss">
.page-search {
  .header-title {
    color: #090101;
  }
  .handle-btns {
    text-align: right;
    margin: 0 50px 10px 0;
  }
}
</style>
