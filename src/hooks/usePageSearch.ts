import { ref } from 'vue'
import type pageContent from '@/compontent/pageContent/pageContent.vue'

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof pageContent>>()
  const handleResetClick = () => {
    // pageContentRef.value?.getPageData()
  }

  const handleSearchClick = (queryInfo: any) => {
    // pageContentRef.value?.getPageData(queryInfo)
  }

  return [pageContentRef, handleResetClick, handleSearchClick]
}
