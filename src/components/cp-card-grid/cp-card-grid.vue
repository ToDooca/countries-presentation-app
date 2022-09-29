<template>
  <div class="wrapper">
    <div class="grid-container" >
      <cp-card v-for="country of countries"
          :image="country.flags.png"
          :country_name="country.name.common"
          :population="country.population"
          :region="country.region"
          :capital-list="country.capital"
      />
    </div>
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
  mounted() {
    store.dispatch("fetchCountries");
  }
}
</script>

<style scoped lang="scss">
@import "cp-card-grid";
</style>
