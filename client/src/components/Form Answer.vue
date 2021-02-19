<template>
  <div class="md-layout-item md-small-size-100">
    <md-field >
      <label for="last-name">Last Name</label>
      <md-input name="last-name" id="last-name" autocomplete="family-name" v-model="form.lastName" />
      <span class="md-error" v-if="!$v.form.lastName.required">The last name is required</span>
      <span class="md-error" v-else-if="!$v.form.lastName.minlength">Invalid last name</span>
    </md-field>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>