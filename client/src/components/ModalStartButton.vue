<template>
<div class="container">
  <md-dialog :md-active.sync="showDialog">
    <md-dialog-title>Before proceed, please</md-dialog-title>
      <md-tabs md-dynamic-height>
        <md-tab md-label="Input">
            <md-field>
              <label for="last-name">username</label>
              <md-input v-model="username" />
            </md-field>
        </md-tab>
        <md-tab md-label="Read">
          <md-field>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dignissimos  architecto tenetur consequuntur sapiente?</p>
          </md-field>
        </md-tab>
    </md-tabs>
    <md-dialog-actions>
      <md-button class="md-primary" :disabled="!username" @click.prevent="nextPage">Start</md-button>
    </md-dialog-actions>
  </md-dialog>

  <md-button class="md-primary md-raised" @click.prevent="showDialog = true">Get Started</md-button>
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
.md-dialog {
  max-width: 768px;
  left: 300px;
}
</style>
