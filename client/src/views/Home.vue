<template>
  <div>
    <ModalStartButton />
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

<style>

</style>
