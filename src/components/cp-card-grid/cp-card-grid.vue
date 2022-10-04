<template>
  <div class="wrapper">
    <div class="filters-section">
      <div class="search-wrapper">
        <ion-icon name="search" class="search-icon"/>
        <input class="input-field"
               type="text"
               placeholder="Search for a country..."
               v-model="searchValue"
        />
      </div>
      <cp-dropdown :label="selectedRegion" class="dropdown">
        <p @click="clearSelection">Clear Selection</p>
        <p v-for="region in regions" @click="selectedRegion=region">
          {{ region }}
        </p>
      </cp-dropdown>
    </div>
    <div class="card-grid-container" :key="countries">
      <cp-card v-for="country of filteredCountries"
               :image="country.flags.png"
               :country_name="country.name.common"
               :population="country.population"
               :region="country.region"
               :capital-list="country.capital"
               :key="[country.name.common, country.region]"
      />
    </div>
  </div>
</template>

<script lang="ts">
import CpCard from "@/components/cp-card/cp-card.vue";
import store from "@/store";
import CpDropdown from "@/components/cp-dropdown/cp-dropdown.vue";
import {defineComponent} from "vue";
import {Country} from "@/types/country";

export default defineComponent<any>({
  name: "cp-card-grid",
  components: {CpDropdown, CpCard},
  computed: {
    countries: function() {
      return store.getters.getCountries
    },
    filteredCountries: function() {
      return this.countries.filter((country: Country) =>
          country.name.common.toLowerCase().includes(this.searchValue.toLowerCase()))
          .filter((country: Country) => country.region.includes(this.selectedRegion))
    },
  },
  data(): {regions: string[], searchValue: string, selectedRegion: string} {
    return {
      regions: ['Europe', 'Asia', 'Oceania', 'Americas', 'Africa'],
      searchValue: '',
      selectedRegion: ''
    }
  },
  methods: {
    clearSelection() {
      this.selectedRegion = ''
    }
  },
  beforeCreate() {
    store.dispatch("fetchCountries");
  }
});
</script>

<style scoped lang="scss">
@import "cp-card-grid";
</style>
