import { Commit } from 'vuex'
import * as types from '../mutation-types'

// 导出接口，user组建中，state的格式
export interface State {
    loading: boolean
}

// export interface Member {
//   opened: number | boolean,
//   withoutAnimation: boolean
// }

const initState: State = {
    loading: false
}

// getters
const getters = {
  getLoading: (state: State) => state.loading,
}

// actions
const actions = {
  load_change: (context: { commit: Commit }, type: boolean) => {
    context.commit(types.LOAD_CHANGE, type)
  },
}

// mutations
const mutations = {
  [types.LOAD_CHANGE](state: State, loading: boolean) {
    state.loading = loading
  },
}

export default {
  state: initState,
  getters,
  actions,
  mutations,
}
