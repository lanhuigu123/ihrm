import { getUserInfoApi, getPermissionApi } from '../../api/index'
const menuList = {
  state: {
    user: [],
    menu: [],
    routeMenu: []
  },
  mutations: {
    getUserMenu(state, data) {
      state.user = data
      console.log(state.user)
    },
    getMenu(state, data) {
      state.menu = data
      console.log(state.menu)
    },
    getRoute(state) {
      state.routeMenu = state.menu.filter((ele) =>
        state.user.find((item) => item == ele.code)
      )
      console.log(state.routeMenu)
    }
  },
  actions: {
    async getUserInfo({ commit }) {
      let result = await getUserInfoApi()
      commit('getUserMenu', result.data.roles.menus)
      let res = await getPermissionApi()
      commit('getMenu', res.data)
      commit('getRoute')
    }
  }
}

export default menuList
