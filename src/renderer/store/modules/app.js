import Vue from 'vue'

const app = {
  state: {
    sidebar: {
      opened: false
    },
    routerView: {
      showMode: 0 // 0 for hidden, 1 for normal, 2 for maxsize
    },
    isAppFullScreen: false
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      state.sidebar.opened = !state.sidebar.opened
      Vue.triggerResize()
    },
    CHANGE_TOGGLE_SIDEBAR_STATUS: (state, bool) => {
      state.sidebar.opened = bool
      Vue.triggerResize()
    },
    CHANGE_ROUTER_VIEW_SHOW_MODE: (state, mode) => {
      state.routerView.showMode = mode
      Vue.triggerResize()
    },
    TOGGLE_FULL_SCREEN: (state, bool) => {
      state.isAppFullScreen = bool
    }
  },
  actions: {
    toggleSideBar ({ commit }) {
      commit('TOGGLE_SIDEBAR')
    },
    changeSideBarStatus ({ commit }, bool) {
      commit('CHANGE_TOGGLE_SIDEBAR_STATUS', bool)
    },
    changeRouterViewShowMode ({ commit }, mode) {
      commit('CHANGE_ROUTER_VIEW_SHOW_MODE', mode)
    },
    toggleFullScreen ({ commit }, bool) {
      commit('TOGGLE_FULL_SCREEN', bool)
    }
  }
}

export default app
