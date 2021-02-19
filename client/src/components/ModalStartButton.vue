<template>
<div>
  <md-dialog :md-active.sync="showDialog">
    <md-dialog-title>Input Your username</md-dialog-title>

      <md-tabs md-dynamic-height>
        <md-dialog-content>
          <md-tab md-label="Username">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="last-name">ex. kelingkingmaut</label>
                <md-input v-model="username" />
              </md-field>
              </div>
          </md-tab>
        </md-dialog-content>

      <!-- <md-tab md-label="Activity">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
      </md-tab> -->
    </md-tabs>
    <md-dialog-actions>
      <md-button class="md-primary" @click.prevent="nextPage">Start</md-button>
    </md-dialog-actions>
  </md-dialog>

  <md-button class="md-primary md-raised" @click.prevent="showDialog = true">Show Dialog</md-button>
</div>
</template>

<script>
// import FormUserName from './FormUserName'
export default {
  name: 'DialogCustom',
  sockets: {
    connect () {
      console.log('socket connected')
    }
  },
  components: {
  },
  data: () => ({
    showDialog: false,
    username: ''
  }),
  methods: {
    nextPage () {
      const newPlayer = {
        username: this.username,
        nyawa: 3,
        id: +new Date()
      }
      localStorage.setItem('username', this.username)
      this.$socket.emit('hai', newPlayer)
      this.$router.push('/about')
      this.$store.dispatch('addPlayers', newPlayer)
    }
  }
}
</script>

<style  scoped>
.md-dialog .md-dialog-container {
  max-width: 768px;
}
</style>
