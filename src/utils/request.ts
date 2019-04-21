import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '@/store/index'
import { getToken } from '@/utils/auth'

// 创建axios实例
const service: any = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  timeout: 15000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use((config: any) => {
  if (store.getters.getToken) {
    config.headers['Authorization'] = `Bearer ${getToken()}` // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  return config
}, (error: any) => {
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  (response: any) => {
    const res = response.data
    if (res.code != 200) {
      Message({
        message: res.message,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  (error: any) => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
