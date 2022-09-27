<template>
  <div class="grid-wrapper wrapper">
    <cp-card/>
    <cp-card/>
    <cp-card/>
    <cp-card/>
    <cp-card/>
    <cp-card/>
    <cp-card/>
    <cp-card/>
  </div>
</template>

<script lang="ts">
import CpCard from "@/components/cp-card/cp-card.vue";
import store from "@/store";

export default {
  name: "cp-card-grid",
  components: {CpCard},
  computed: {
    countries: function () {
      return store.getters.getCountries
    }
  },
  created() {
    store.dispatch("fetchCountries");
  }
}
</script>

<style scoped lang="scss">
@import "cp-card-grid";
</style>
