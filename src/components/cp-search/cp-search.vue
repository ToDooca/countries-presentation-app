<template>
  <div class="search-wrapper">
    <ion-icon name="search" class="search-icon"/>
    <input class="input-field" type="text" :placeholder="placeholder_label">
  </div>
</template>

<script lang="ts">
export default {
  name: "cp-search",
  props: {
    placeholder_label: String
  }
}
</script>

<style scoped lang="scss">
@import "cp-search";
</style>
