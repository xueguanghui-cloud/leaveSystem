<script setup lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'
import LSTable from '@/baseUI/table'
const emits = defineEmits(['newData', 'updateData'])
withDefaults(
  defineProps<{
    contentTableConfig: object
    pageName: string
  }>(),
  {}
)

// 1.双向绑定pageInfo
const pageInfo = ref({ currentPage: 1, pageSize: 10 })
watch(pageInfo, () => {
  getPageData()
})

// 2.发送网络请求
const getPageData = (queryInfo: any = {}) => {
  let newQueryInfo: {
    [key: string]: any
  } = {}
  for (const key in queryInfo) {
    if (queryInfo[key] !== '') {
      newQueryInfo[key] = queryInfo[key]
    }
  }

  store.dispatch('system/getPageListAction', {
    pageName: props.pageName,
    queryInfo: {
      offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
      size: pageInfo.value.pageSize,
      ...newQueryInfo
    }
  })
}
</script>

<template>
  <div class="pageContent">
    <LSTable
      :listData="dataList"
      :listCount="dataCount"
      v-bind="contentTableConfig"
      @selectionChange="selectionChange"
      v-model:page="pageInfo"
    >
      <!-- header的插槽 -->
      <template #headerHandler>
        <el-button
          type="primary"
          v-if="isCreate && contentTableConfig.buttonName"
          @click="handleNewData"
          icon="circlePlus"
          >{{ contentTableConfig.buttonName }}</el-button
        >
      </template>
      <template #handler="scoped">
        <el-button
          type="primary"
          size="small"
          icon="editPen"
          v-if="isUpdate"
          @click="handleUpdateClick(scoped.row)"
          >编辑</el-button
        >
        <el-button
          type="danger"
          size="small"
          icon="delete"
          v-if="isDelete"
          @click="handleDeleteClick(scoped.row)"
          >删除</el-button
        >
      </template>
    </LSTable>
  </div>
</template>

<style scoped lang="scss"></style>
