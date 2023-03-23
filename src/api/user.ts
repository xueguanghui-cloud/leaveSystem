import { get, post } from '@/service'

/**
 * 用户登录
 * @param user 用户账号密码
 * @returns Promise
 */
export const userLogin = (user: { userAccount: string; userPassword: string }) => {
  return post('/user/login', user)
}
