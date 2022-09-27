<template>
  <cp-card-grid/>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import CpCardGrid from "@/components/cp-card-grid/cp-card-grid.vue";

export default defineComponent({
  name: 'LandingPage',
  components: {CpCardGrid},
});

</script>

<style scoped lang="scss">
@import "landing-page";
</style>
