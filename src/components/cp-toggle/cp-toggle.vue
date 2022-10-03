<template>
  <div class="toggle-wrapper">
    <label class="toggle">
      <input type="checkbox"
             :checked="(mode==='dark') ? 'checked' : false"
             @change="$emit('toggle')"
      />
      <span class="toggler">
        <ion-icon name="moon-outline" v-if="mode==='dark'"/>
        <ion-icon name="moon" v-if="mode==='light'"/>
      </span>
    </label>
  </div>
</template>

<script lang="ts">
export default {
  name: "cp-toggle",
  props: {
    mode: String
  }
}
</script>

<style scoped lang="scss">
@import "cp-toggle";
</style>
