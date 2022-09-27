<template>
  <div v-for="country in countries" :key="country.name">
  </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import store from "@/store";

export default defineComponent({
  name: 'LandingPage',
  computed: {
    countries: function () {
      return store.getters.getCountries
    }
  },
  created() {
    store.dispatch("fetchCountries");
  }
});

</script>

<style scoped lang="scss">
@import "landing-page";
</style>
