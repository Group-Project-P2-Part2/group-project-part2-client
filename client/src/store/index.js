import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: []
  },
  mutations: {
    setNextPage (state, payload) {
      state.players.push(payload.username)
      router.push('/about')
    }
  },
  actions: {
    nextPage (context, payload) {
      console.log('================')
      context.commit('setNextPage', payload)
    }
  },
  modules: {
  }
})
