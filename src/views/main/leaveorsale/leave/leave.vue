<script setup lang="ts">
import { computed, ref } from 'vue'
import pageSearch from '@/compontent/pageSearch/pageSearch.vue'
import { searchFormConfig } from './config/serch.config'
import { userLogin } from '@/api/leave'
import { userStore } from '@/stores/user'

const storeUser = userStore()

// 重置
const handleResetClick = () => {}
// 查询
const handleSearchClick = () => {}

const columns = [
  {
    title: 'ID',
    dataIndex: 'userId'
  },
  {
    title: '姓名',
    dataIndex: 'userName'
  },
  {
    title: '学号',
    dataIndex: 'sno'
  },
  {
    title: '性别',
    dataIndex: 'gender'
  },
  {
    title: '年级',
    dataIndex: 'userGrade'
  },
  {
    title: '院系',
    dataIndex: 'deptId'
  },
  {
    title: '请假原因',
    dataIndex: 'leaveReason'
  },
  {
    title: '请假天数',
    dataIndex: 'leaveDays'
  },
  {
    title: '是否离校',
    dataIndex: 'leaveType'
  },
  {
    title: '请假中',
    dataIndex: 'leaveState'
  },
  {
    title: '创建时间',
    dataIndex: 'createTime'
  }
]
const dataSource = ref([])
const pagination = computed(() => ({
  total: 200,
  current: 0,
  pageSize: 10
}))

userLogin({
  userId: storeUser.userInfo.id,
  current: pagination.value.current,
  pageSize: pagination.value.pageSize
}).then((res) => {
  console.log(res)
  dataSource.value = res.data.records
})

const handleTableChange = (
  pag: { pageSize: number; current: number },
  filters: any,
  sorter: any
) => {
  console.log({
    results: pag.pageSize!,
    page: pag?.current,
    sortField: sorter.field,
    sortOrder: sorter.order,
    ...filters
  })
}
</script>

<template>
  <div class="leave">
    <!-- 搜索区域 -->
    <pageSearch
      :search-form-config="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @searchBtnClick="handleSearchClick"
    ></pageSearch>
    <a-table
      :columns="columns"
      :data-source="dataSource"
      :pagination="pagination"
      :loading="loading"
      @change="handleTableChange"
    >
      <template #bodyCell="{ column, text }">
        <template v-if="column.dataIndex === 'name'">{{ text.first }} {{ text.last }}</template>
      </template>
    </a-table>
  </div>
</template>

<style scoped lang="scss"></style>
