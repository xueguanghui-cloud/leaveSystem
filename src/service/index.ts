import axios from 'axios'
// import { userStore } from '@/stores/user'
// import router from '@/router'

// 1. 创建一个新的 axios 实例
// 导出基准地址，原因：其他地方不是通过axios发送请求的地方用上基准地址
export const baseURL = 'https://www.fastmock.site/mock/75409322bc339301b18ce616e086a6e0/api'
const instance = axios.create({
  // axios 配置（baseURL timeout）
  baseURL,
  timeout: 5000
})

// 2. 请求拦截器，如果有 token 进行头部携带
instance.interceptors.request.use(
  (config) => {
    // 拦截业务逻辑
    // 进行请求配置修改
    // 如果本地有 token 就在头部携带
    /* const storeUser = userStore()
    const { profile } = storeToRefs(storeUser) // 解构并让数据具有响应式
    if (profile.value.token) {
      config.headers!.Authorization = `Bearer ${profile.value.token}`
    } */
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

// 3. 响应拦截器：1. 剥离无效数据； 2. 处理 token 无效
// res => rea.data 取出的data数据就是将来调用接口的时候直接拿到的后台数据
instance.interceptors.response.use(
  (res) => {
    return res.data
  },
  (err) => {
    return Promise.reject(err)
  }
)

// 4. 导出一个函数，调用当前的axios实例发送请求，返回值 Promise
// 请求工具函数
const request = (
  url: string,
  method: string,
  submitData?: any
): Promise<{ code: number; data: any; messsage: string }> => {
  // 负责发送请求： 请求地址，请求方式，提交的数据
  return instance({
    url,
    method,
    // 如果是get请求，需要使用params来传递submitData
    // 如果不是get请求，需要使用data来传递submitData
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}

const get = (url: string, submitData?: any) => {
  return request(url, 'get', submitData)
}
const post = (url: string, submitData?: any) => {
  return request(url, 'post', submitData)
}

export { get, post, request }
