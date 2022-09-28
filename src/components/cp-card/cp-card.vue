<template>
  <div class="card-container">
    <img :src="image" alt="flag_img">
    <div class="card-info">
      <h2>{{ country_name }}</h2>
      <p><span>Population: </span>{{ formatPopulation(population) }}</p>
      <p><span>Region: </span>{{ region }}</p>
      <div class="capital-list">
        <span>Capital:&nbsp;</span>
        <ul>
          <li v-for="capital of capitalList"> {{ capital }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {PropType} from "vue";

export default {
  name: "cp-card",
  props: {
    image: {
      type: String,
      default: 'https://flagcdn.com/w320/rs.png'
    },
    country_name: {
      type: String,
      default: 'N/A'
    },
    population: {
      type: String,
      default: 'N/A'
    },
    region: {
      type: String,
      default: 'N/A'
    },
    capitalList: {
      type: Array as PropType<Array<String>>,
      default: ['N/A']
    },
  },
  methods: {
    formatPopulation(population: string): string {
      return population.toLocaleString();
    }
  }
}
</script>

<style scoped lang="scss">
@import "cp-card";
</style>
