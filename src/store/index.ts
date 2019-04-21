import Vue from 'vue'
import Vuex, { Commit, Dispatch } from 'vuex'
import actions from './actions'
import getters from './getters'
import user, { State as userState } from './modules/user'
import sidebar from './modules/sidebar'
import common from './modules/common'

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    getters,
    modules: {
        user,
        sidebar,
        common
    }
})

export interface State {
    user: userState
}