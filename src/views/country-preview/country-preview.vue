<template>
  <div class="preview-container">
    <div class="wrapper">
      <h1>{{ countryName }}</h1>
      <p>{{countryInfo}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import store from "@/store";

export default defineComponent({
  name: 'CountryPreview',
  components: {},
  props: {
    // country: String
  },
  computed: {
    countryName: function () {
      return this.$route.params.name.toString().toLowerCase();
    },
    countryInfo: function () {
      return store.getters.getCountry
    },
    created() {
      store.dispatch('fetchCountry',{
        countryName: this.countryName
      });
    }
  }
});
</script>

<style scoped lang="scss">
@import "country-preview";
</style>
