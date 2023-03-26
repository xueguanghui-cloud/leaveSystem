import { get, post } from '@/service'

/**
 * 获取请假列表
 * @param user
 * @returns Promise
 */
interface RequestLeave {
  userId: number
  current: number
  pageSize?: number
  createTime?: string
  leaveState?: 1 | 2
  datetime1?: string
  datetime2?: string
}
export const userLogin = (requestLeave: RequestLeave) => {
  return post('/leave/list/me', requestLeave)
}
