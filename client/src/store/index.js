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
      state.players = payload // terserah mau dipush atau di reassign
    },
    addPlayers (state, payload) {
      state.players.push(payload)
    },
    setAnswer (state, payload) {
      state.answer.push(payload)
    }
  },
  actions: {
    addPlayers (context, payload) {
      context.commit('addPlayers', payload)
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
