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
    },
    setPlayers (state, payload) {
      state.palyers = payload // terserah mau dipush atau di reassign
    }
  },
  actions: {
    nextPage (context, payload) {
      context.commit('setNextPage', payload)
    }
  },
  modules: {
  }
})
