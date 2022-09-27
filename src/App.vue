<template>
  <cp-nav/>
  <router-view/>
</template>

<script lang="ts">
import CpNav from "@/components/cp-nav/cp-nav.vue";

export default {
  components: {CpNav},
}

</script>

<style lang="scss">
@import "src/assets/global";
</style>
