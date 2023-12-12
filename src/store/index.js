import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import menuList from './modules/menuList'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {
    menuList
  }
})
