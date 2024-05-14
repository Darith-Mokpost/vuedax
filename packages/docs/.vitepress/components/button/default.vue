<template>
  <div class="center">
    <vd-button
      :active="active == 0"
      @click="active = 0"
    >
      Active
    </vd-button>
    <vd-button
      :active="active == 1"
      @click="active = 1"
    >
      Default
    </vd-button>
    <vd-button disabled >Disabled</vd-button>
  </div>
</template>
<style scoped lang="stylus">
.center
  display flex
  align-items center
  justify-content center
  padding 20px
  flex-wrap wrap
</style>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
  data: () => ({
    active: 0
  })
})
</script>

