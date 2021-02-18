<template>
  <div>
    <ModalStartButton
    />
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
  }

}
</script>

<style>

</style>
