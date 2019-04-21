import { Commit, Dispatch } from 'vuex'
import login from '@/api/login'
import request from '@/utils/request'
import * as types from '../mutation-types'
import { getToken, setToken, removeToken } from '@/utils/auth'

interface User {
  username: string
  password: string
}
// 导出接口，user组建中，state的格式
export interface State {
  users: Member[],
  token: string
}
//  获取用户信息接口
interface Member {
  id: number,
  sex: number | string,
  created_at: string,
  deleted_at: string,
  email: string,
  name: string,
  sex_text: string,
  truename: string,
  updated_at: string
}
// 登入接口
interface LoginState {
  token: string,
  user: Object
}

// initial state
// shape: [{ id, quantity }]
const initState: State = {
  users: [],
  token: ''
}

// getters
const getters = {
  getUsers: (state: State) => state.users,
  getToken: (state: State) => state.token
}

// actions
const actions = {
  // 登入
  async Login(context: { commit: Commit; state: State, dispatch: Dispatch }, userInfo: User) {
    const username = userInfo.username.trim()
    const response: any = await login.login(username, userInfo.password)
    const data: LoginState = response.data
    setToken(data.token)
    context.commit(types.SET_TOKEN, data.token)
    context.dispatch('GetInfo', data.token)
    return response
  },

  SetToken(context: { commit: Commit; state: State }, token: string ) {
    context.commit(types.SET_TOKEN, token)
  },

  async GetInfo(context: { commit: Commit; state: State }, token: string) {
    const response: any = await login.get_info(token)
    const data: Member = response.data
    context.commit(types.SET_USERS, data)
    return response
  },

  // 前端 登出
  FedLogOut(context: { commit: Commit }) {
    return new Promise(resolve => {
      context.commit(types.SET_TOKEN, '')
      removeToken()
      resolve()
    })
  },

}

// mutations
const mutations = {
  // 给 token 赋值
  [types.SET_TOKEN](state: State, payload: string) {
    state.token = payload
  },
  // 获取用户
  [types.SET_USERS](state: State, payload: Member[]) {
    state.users = payload
  },
}

export default {
  state: initState,
  getters,
  actions,
  mutations,
}
