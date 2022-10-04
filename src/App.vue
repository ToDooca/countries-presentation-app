<template>
  <div class="app" :class="mode">
    <cp-nav :mode="mode" @toggle="toggle"/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import CpNav from "@/components/cp-nav/cp-nav.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {CpNav},
  data(): {mode: string} {
    return {
      mode: 'dark'
    }
  },
  methods: {
    toggle() {
      if (this.mode === 'dark') {
        this.mode = 'light'
      } else {
        this.mode = 'dark'
      }
    }
  }
})

</script>

<style lang="scss">
@import "src/assets/global";
</style>
