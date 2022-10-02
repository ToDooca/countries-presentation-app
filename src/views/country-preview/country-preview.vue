<template>
  <div class="wrapper">
    <div class="preview-container" :key="countryName">
      <p>{{ countryInfo.name.common }}</p>
      <p>Native Name: {{ Object.values(countryInfo.name.nativeName)[0].official }}</p>
      <p>Population: {{ formatPopulation(countryInfo.population) }}</p>
      <p>Region: {{ countryInfo.region }}</p>
      <p>Subregion: {{ countryInfo.subregion }}</p>
      <p>Capital: {{ countryInfo.subregion }}</p>
      <div class="capital-list">
        <span>Capital:&nbsp;</span>
        <p v-for="(capital, key, index) of countryInfo.capital">{{ capital }}<span
            v-if="checkIfFirstOrLast(index, countryInfo.capital)">,&nbsp;</span>
        </p>
      </div>
      <p>Top Level Domain: {{ countryInfo.tld[0] }}</p>
      <div class="currencies-list">
        <span>Currencies:&nbsp;</span>
        <p v-for="(currency, key, index) in countryInfo.currencies">{{ currency.name }}<span
            v-if="checkIfFirstOrLast(index, countryInfo.currencies)">,&nbsp;</span>
        </p>
      </div>
      <div class="languages-list">
        <span>Languages:&nbsp;</span>
        <p v-for="(language, key, index) in countryInfo.languages">{{ language }}<span
            v-if="checkIfFirstOrLast(index, countryInfo.languages)">,&nbsp;</span>
        </p>
      </div>
      <cp-button v-for="border in matchBorderCountries()" :btn_label="border"/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import axios from "axios";
import store from "@/store";
import {Country} from "@/types/country";
import CpButton from "@/components/cp-button/cp-button.vue";

export default defineComponent({
  name: 'CountryPreview',
  components: {CpButton},
  props: {},
  methods: {
    async fetchCountryInfo() {
      const countryInfoResponse = await axios.get('https://restcountries.com/v3.1/name/' + this.countryName)
      this.countryInfo = countryInfoResponse.data[0]
    },
    formatPopulation(population: number): string {
      return population.toLocaleString();
    },
    // Method to display comma in arrays if element isn't the last or if it isn't the only element in object
    checkIfFirstOrLast(index: number, object: {}): Boolean {
      if (Object.keys(object).length > 1) return index !== Object.keys(object).length - 1;
      else return false
    },
    matchBorderCountries(): String[] {
      let borderCountries: String[] = [];
      this.countries.forEach((country: Country) => {
        if(this.countryInfo?.borders.includes(country.cca3)){
          borderCountries.push(country.name.common)
        }
      })
      return borderCountries
    }
  },
  computed: {
    countryName: function () {
      return this.$route.params.name.toString().toLowerCase();
    },
    countries: function () {
      return store.getters.getCountries
    }
  },
  data(): {countryInfo?: Country} {
    return {
      countryInfo: undefined
    }
  },
  async created() {
    await this.fetchCountryInfo();
  },
  mounted() {
    store.dispatch("fetchCountries");
  }

});
</script>

<style scoped lang="scss">
@import "country-preview";
</style>
