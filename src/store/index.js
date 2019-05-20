import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
