import Vue from 'vue'
import Vuex from 'vuex'
// import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: [],
    answer: []
  },
  mutations: {
    // setPlayers (state, payload) {
    //   state.players.push(payload.username)
    //   router.push('/about')
    // },
    setPlayers (state, payload) {
      state.players.push(payload) // terserah mau dipush atau di reassign
    },
    setAnswer (state, payload) {
      state.answer.push(payload)
    }
  },
  actions: {
    addPlayers (context, payload) {
      context.commit('setPlayers', payload)
    },
    SOCKET_hai (context, payload) {
      context.commit('setPlayers', payload)
    },
    SOCKET_sendAnswer (context, payload) {
      context.commit('setAnswer', payload)
    },
    sendAnswer (context, payload) {
      context.commit('setAnswer', payload)
    }
  },
  modules: {
  }
})
