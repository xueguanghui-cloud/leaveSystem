<script setup lang="ts">
interface Page {
  currentPage: number
  pageSize: number
}

const props = withDefaults(
  defineProps<{
    title: string
    listData: []
    listCount: number
    propList: []
    page: Page
    childrenProps: object
    showFooter: true
  }>(),
  {
    title: '',
    listData: () => [],
    listCount: 0,
    propList: () => [],
    page: () => ({ currentPage: 0, pageSize: 10 }),
    childrenProps: () => ({}),
    showFooter: true
  }
)
const emits = defineEmits(['selectionChange', 'update:page'])

const handleSelectionChange = (value: any) => {
  console.log(value)

  emits('selectionChange', value)
}

const handleSizeChange = (pageSize: number) => {
  console.log(`${pageSize} items per page`)
  emits('update:page', { ...props.page, pageSize })
}
const handleCurrentChange = (currentPage: number) => {
  console.log(`current page: ${currentPage}`)
  emits('update:page', { ...props.page, currentPage })
}

interface DataType {
  key: string | number
  name: string
  age: number
  address: string
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address'
  }
]
</script>

<template>
  <div class="table">
    <!-- page头部 -->
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler"> </slot>
        </div>
      </slot>
    </div>
    <a-table
      :columns="propList"
      :data-source="listData"
      :pagination="false"
      @change="handleSelectionChange"
    >
    </a-table>
    <!-- page底部：默认为分页器 -->
    <div class="footer" v-if="showFooter">
      <slot name="footer">
        <a-pagination
          :current="page.currentPage"
          :defaultPageSize="page.currentPage"
          :total="listCount"
          :pageSizeOptions="[10, 20, 30, 40]"
          size="small"
          :hideOnSinglePage="true"
          @change="handleCurrentChange"
          @showSizeChange="handleSizeChange"
        />
      </slot>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
