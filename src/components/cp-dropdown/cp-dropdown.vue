<template>
  <div class="dropdown">
    <button @click="toggleDropdown">
      <span v-if="label===''">Select a Region</span>
      <span>{{ label }}</span>
      <ion-icon name="chevron-down"/>
    </button>
    <div class="dropdown-menu" v-if="dropdownOpen">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "cp-dropdown",
  data(): { dropdownOpen: boolean } {
    return {
      dropdownOpen: false
    }
  },
  props: {
    label: String
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen
    }

  }
});
</script>

<style scoped lang="scss">
@import "cp-dropdown";
</style>
