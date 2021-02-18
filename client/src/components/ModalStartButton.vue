<template>
<div>
  <md-dialog :md-active.sync="showDialog">
    <md-dialog-title>Preferences</md-dialog-title>

    <md-tabs md-dynamic-height>
      <md-tab md-label="Username">
        <div class="md-layout-item md-small-size-100">
          <md-field>
          <md-dialog-content>
            <label for="last-name">ex. kelingkingmaut</label>
          <md-input v-model="username" />
        </md-dialog-content>
      </md-field>
  </div>
      </md-tab>

      <md-tab md-label="Activity">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
      </md-tab>
    </md-tabs>
    <md-dialog-actions>
      <md-button class="md-primary" @click="nextPage">Start</md-button>
    </md-dialog-actions>
  </md-dialog>

  <md-button class="md-primary md-raised" @click="showDialog = true">Show Dialog</md-button>
</div>
</template>

<script>
// import FormUserName from './FormUserName'
export default {
  name: 'DialogCustom',
  components: {
  },
  data: () => ({
    showDialog: false,
    username: ''
  }),
  methods: {
    nextPage () {
      this.$store.dispatch('nextPage', { username: this.username, next: true })
    }
  }
}
</script>

<style  scoped>
.md-dialog .md-dialog-container {
  max-width: 768px;
}
</style>
