<template>
  <div class="wrapper">
    <cp-button class="back-btn"
               btn_label="Back"
               btn_icon="arrow-back"
               ico_left="true"
               @click="goBack"/>
    <div class="preview-container" :key="countryName">
      <img :src="countryInfo.flags.png" alt="country-image">
      <div class="country-details">
        <h2 class="country-name">{{ countryInfo.name.common }}</h2>
        <div class="info-rows">
          <div class="info-row-left">
            <p><span>Native Name: </span>{{ Object.values(countryInfo.name.nativeName)[0].official }}</p>
            <p><span>Population: </span>{{ formatPopulation(countryInfo.population) }}</p>
            <p><span>Region: </span>{{ countryInfo.region }}</p>
            <p><span>Subregion: </span>{{ countryInfo.subregion }}</p>
            <p><span>Capital: </span>{{ countryInfo.subregion }}</p>
            <div class="capital-list">
              <span>Capital:&nbsp;</span>
              <p v-for="(capital, key, index) of countryInfo.capital">{{ capital }}<span
                  v-if="checkIfFirstOrLast(index, countryInfo.capital)">,&nbsp;</span>
              </p>
            </div>
          </div>

          <div class="info-row-right">
            <p><span>Top Level Domain: </span>{{ countryInfo.tld[0] }}</p>
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
          </div>
        </div>
        <div class="buttons-section">
          <cp-button btn_label="View on Map" class="map-btn" :href="this.countryInfo.maps.googleMaps"/>
          <div class="borders-list" v-if="this.countryInfo?.borders">
            <span>Border Countries:&nbsp;</span>
            <router-link v-for="border in matchBorderCountries()"
                         :to="{ name: 'country_preview', params: {name: border}}">
              <cp-button :btn_label="border" @click="updateCountryName(border)"/>
            </router-link>
          </div>
        </div>
      </div>
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
  methods: {
    updateCountryName(newCountryName: string) {
      this.countryName = newCountryName;
      this.fetchCountryInfo()
    },
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
        if (this.countryInfo?.borders.includes(country.cca3)) {
          borderCountries.push(country.name.common);
        }
      })
      return borderCountries;
    },
    goBack() {
      this.updateCountryName(this.$route.params.name.toString().toLowerCase());
      this.$router.back();
    }
  },
  computed: {
    countries: function () {
      return store.getters.getCountries;
    }
  },
  data(): { countryInfo?: Country, countryName?: string } {
    return {
      countryInfo: undefined,
      countryName: this.$route.params.name.toString().toLowerCase()
    }
  },
  beforeCreate() {
    store.dispatch("fetchCountries");
  },
  async created() {
    await this.fetchCountryInfo();
  },
});
</script>

<style scoped lang="scss">
@import "country-preview";
</style>
