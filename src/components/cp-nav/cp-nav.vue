<template>
  <nav class="navbar">
    <div class="navbar-container wrapper">
      <h2>Where in the world?</h2>
      <p>
        <cp-toggle :mode="mode" @toggle="$emit('toggle')"/>
        Dark mode
      </p>
    </div>
  </nav>
</template>

<script lang="ts">
import CpToggle from "@/components/cp-toggle/cp-toggle.vue";
export default {
  name: "cp-nav",
  components: {CpToggle},
  props: {
    mode: String
  }
}
</script>

<style scoped lang="scss">
@import "cp-nav";
</style>
