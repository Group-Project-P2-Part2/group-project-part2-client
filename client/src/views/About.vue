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
          <md-list-item v-for="(player, index) in players" :key="index">
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">{{player}}</span>
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
  computed: {
    players () {
      return this.$store.state.players
    }
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
