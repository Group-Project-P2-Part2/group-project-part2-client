import Vue from 'vue'
import Vuex from 'vuex'
// import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: []
  },
  mutations: {
    // setPlayers (state, payload) {
    //   state.players.push(payload.username)
    //   router.push('/about')
    // },
    setPlayers (state, payload) {
      state.players.push(payload) // terserah mau dipush atau di reassign
    }
  },
  actions: {
    addPlayers (context, payload) {
      context.commit('setPlayers', payload)
    },
    SOCKET_hai (context, payload) {
      context.commit('setPlayers', payload)
    }
  },
  modules: {
  }
})
