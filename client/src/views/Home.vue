<template>
  <div id="home">
    <div>
      <h1>HELLO WORLD</h1>
    </div>
    <div>
      <ModalStartButton />
    </div>
  </div>
</template>

<script>
import ModalStartButton from '../components/ModalStartButton'

export default {
  name: 'Home',
  components: {
    ModalStartButton
  },
  data () {
    return {
      next: false
    }
  },
  methods: {
  },
  created () {
    // this.$store.commit('players', [])
  }

}
</script>

<style scoped>
  #home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 90vh;
  }
</style>
