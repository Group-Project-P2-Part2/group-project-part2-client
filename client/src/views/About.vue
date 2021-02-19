<template>

  <div class="page-container">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <span class="md-title">My Title</span>
      </md-app-toolbar>
      <md-app-drawer md-permanent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
          Participants
        </md-toolbar>

        <md-list>
          <md-list-item v-for="(player) in players" :key="player.id">
            <md-avatar>
              <img :src="`https://avatars.dicebear.com/api/human/${player.id}.svg`">
            </md-avatar>
            <p v-for="hati in player.nyawa" :key="hati" >Hati</p>
            <span class="md-list-item-text">{{player.username}}</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content style="height:100vh;">
        <h2>KENAPA BUMI ITU BULAT?</h2>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        <div style="display:flex; justify-content:space-evenly; align-items:center;">
          <md-input style="width: 70%; height:5vh;" />
          <md-button class="md-primary">Primary</md-button>
        </div>
        <div>
        </div>
      </md-app-content>
    </md-app>
  </div>

</template>

<script>
export default {
  name: 'Waterfall',
  data () {
    return {
      nyawa: 3
    }
  },
  computed: {
    players () {
      return this.$store.state.players
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
</style>
