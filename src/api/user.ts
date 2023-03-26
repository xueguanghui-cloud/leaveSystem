import { get, post } from '@/service'

/**
 * 用户登录
 * @param user 用户账号密码
 * @returns Promise
 */
export const userLogin = (user: { userAccount: string; userPassword: string }) => {
  return post('/user/login', user)
}

/**
 * 上传图片
 * @param file
 * @returns Promise
 */
export const getUserList = (file: File) => {
  return post('/user/list/page', file)
}
