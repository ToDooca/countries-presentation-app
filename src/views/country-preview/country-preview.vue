<template>
  <div class="preview-container">
    <div class="wrapper">
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

  },
  computed: {
    countryName: function () {
      return this.$route.params.name.toString().toLowerCase();
    },
    countryInfo: function () {
      return store.getters.getCountry
    },
  },
  mounted() {
    store.dispatch('fetchCountry');
  }
});
</script>

<style scoped lang="scss">
@import "country-preview";
</style>
