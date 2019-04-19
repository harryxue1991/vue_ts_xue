import { Commit } from 'vuex'
import * as types from '../mutation-types'
import Cookies from 'js-cookie'

// 导出接口，user组建中，state的格式
export interface State {
    sidebar: any,
    device: string
}

const initState: State = {
    sidebar: {
        opened: !+<any>Cookies.get('sidebarStatus'),
        withoutAnimation: false
    },
    device: 'desktop'
}

// getters
const getters = {
  getSidebar: (state: State) => state.sidebar
}

// actions
const actions = {
  ToggleSideBar(context: { commit: Commit }) {
    context.commit(types.TOGGLE_SIDEBAR)
  },
  CloseSideBar(context: { commit: Commit }, { withoutAnimation }: any) {
    context.commit(types.CLOSE_SIDEBAR, withoutAnimation)
  },
  ToggleDevice(context: { commit: Commit }, device: string) {
    context.commit(types.TOGGLE_DEVICE, device)
  }
}

// mutations
const mutations = {
  [types.TOGGLE_SIDEBAR](state: State) {
    if (state.sidebar.opened) {
      console.log(Cookies)
      // Cookies.set('sidebarStatus', 1)
    } else {
      // Cookies.set('sidebarStatus', 0)
    }
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
  },
  [types.CLOSE_SIDEBAR](state: State, withoutAnimation: number) {
    // Cookies.set('sidebarStatus', 1)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  [types.TOGGLE_DEVICE](state: State, device: string) {
    state.device = device
  },
}

export default {
  state: initState,
  getters,
  actions,
  mutations,
}
