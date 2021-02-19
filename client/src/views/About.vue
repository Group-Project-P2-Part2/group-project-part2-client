<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <span class="md-title">My Title</span>
      </md-app-toolbar>
      <md-app-drawer md-permanent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
        </md-toolbar>

        <md-list>
          <md-list-item v-for="(player) in players" :key="player.id">
            <md-avatar>
              <img :src="`https://avatars.dicebear.com/api/human/${player.id}.svg`">
            </md-avatar>
            <p v-for="hati in player.nyawa" :key="hati">Hati</p>
            <span class="md-list-item-text" :class="{'user': player.username === getName}">{{player.username}}</span>
          </md-list-item>

          <!-- <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Amos</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Mujib</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Si dia</span>
          </md-list-item> -->
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <div v-if="answer.length">
          <div>
            <p v-for="(answr, index) in answer" :key="index" :class="{user: answr.answer === 'Benar'}">{{answr.username}} {{answr.answer}}</p>
          </div>
        </div>
        <form @submit.prevent="sendAnswer">
          <input type="text" v-model="input" :disabled="isCorrect">
          <input type="submit" value="Send" :disabled="isCorrect">
        </form>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: 'Waterfall',
  data () {
    return {
      input: '',
      isCorrect: false
    }
  },
  methods: {
    sendAnswer () {
      if (this.input !== 'aku') {
        this.$store.commit('setAnswer', { answer: this.input, username: localStorage.getItem('username') })
        this.$socket.emit('sendAnswer', { answer: this.input, username: localStorage.getItem('username') })
      } else {
        this.$store.commit('setAnswer', { answer: 'Benar', username: localStorage.getItem('username') })
        this.$socket.emit('sendAnswer', { answer: 'Benar', username: localStorage.getItem('username') })
        this.isCorrect = true
      }
      this.input = ''
    }
  },
  computed: {
    players () {
      return this.$store.state.players
    },
    answer () {
      return this.$store.state.answer
    },
    getName () {
      return localStorage.getItem('username')
    }
    // avatars () {
    //   return `https://avatars.dicebear.com/api/human/${+new Date()}.svg`
    // }
  },
  created () {
  }
}
</script>

<style scoped>
.md-app {
  max-height: 400px;
  border: 1px solid rgba(#000, .12);
}
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}

.user {
  background-color: yellow;
}
</style>
