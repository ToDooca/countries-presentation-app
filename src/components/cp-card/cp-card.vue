<template>
  <div class="card-container">
    <img :src="image" alt="flag_img">
    <h3>{{ country_name }}</h3>
    <p>{{ population }}</p>
    <p>{{ region }}</p>
    <p>{{ capital }}</p>
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
      type: String,
      default: '6908224'
    },
    region: {
      type: String,
      default: 'Europe'
    },
    capital: {
      type: String,
      default: 'Belgrade'
    },
  }
}
</script>

<style scoped lang="scss">
@import "cp-card";
</style>
