<template>
  <div class="card-container">
    <img :src="image" alt="flag_img">
    <div class="card-info">
      <h2>{{ country_name }}</h2>
      <p><span>Population: </span>{{ formatPopulation(population) }}</p>
      <p><span>Region: </span>{{ region }}</p>
      <p><span>Capital: </span>{{ capital }}</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "cp-card",
  props: {
    image: {
      type: String,
      default: 'https://flagcdn.com/w320/rs.png'
    },
    country_name: {
      type: String,
      default: 'Serbia'
    },
    population: {
      type: Number,
      default: 6908224
    },
    region: {
      type: String,
      default: 'Europe'
    },
    capital: {
      type: String,
      default: 'Belgrade'
    },
  },
  methods: {
    formatPopulation(population: number): string{
      return population.toLocaleString();
    }
  }
}
</script>

<style scoped lang="scss">
@import "cp-card";
</style>
