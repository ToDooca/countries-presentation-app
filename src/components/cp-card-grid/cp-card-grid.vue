<template>
  <div class="wrapper">
    <div class="filters-section">
      <cp-search placeholder_label="Search for a country..."/>
      <cp-dropdown label="Filter by Region" class="dropdown">
        <p>jen</p>
        <p>jenasda</p>
        <p>jenasda</p>
        <p>jenvcvc</p>
      </cp-dropdown>
    </div>
    <div class="card-grid-container" :key="countries">
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
import CpSearch from "@/components/cp-search/cp-search.vue";
import CpDropdown from "@/components/cp-dropdown/cp-dropdown.vue";

export default {
  name: "cp-card-grid",
  components: {CpDropdown, CpSearch, CpCard},
  computed: {
    countries: function () {
      return store.getters.getCountries
    }
  },
  beforeCreate() {
    store.dispatch("fetchCountries");
  }
}
</script>

<style scoped lang="scss">
@import "cp-card-grid";
</style>
