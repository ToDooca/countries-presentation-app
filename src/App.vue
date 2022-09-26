<template>
  <cp-nav/>
  <router-view/>
</template>

<script>
import CpNav from "@/components/cp-nav/cp-nav";

export default {
  components: {CpNav}
}
</script>

<style lang="scss">
@import "src/assets/global";
</style>
