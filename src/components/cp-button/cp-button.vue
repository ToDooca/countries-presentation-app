<template>
  <a :class="'button-content ico-left-' + ico_left">
    {{ btn_label }}
      <ion-icon v-if="btn_icon !== ''" :name="btn_icon"/>
  </a>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "cp-button",
  props: {
    btn_label: {
      type: String,
      default: 'please add label'
    },
    btn_icon: {
      type: String,
      default: ''
    },
    ico_left: {
      type: Boolean,
      default: false
    }
  }
});
</script>

<style scoped lang="scss">
@import "cp-button";
</style>
