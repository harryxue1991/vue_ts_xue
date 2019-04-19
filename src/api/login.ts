import request from '@/utils/request'

export default {
  // 登陆
  login: (username: string, password: string) => {
    return request.post('/api/admin/login', { 'email': username, 'password': password })
  },

  // 用户信息
  get_info: (token: string) => {
    return request.get(`/api/admin/userinfo`, {
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    })
  },

  // 退出
  logout: () => {
    return request.post('/user/logout')
  }

}
