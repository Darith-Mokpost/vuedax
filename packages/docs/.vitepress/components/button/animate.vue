<template>
  <div class="center">
    <vd-button>
      Home
      <template #animate >
        <i class='bx bx-home-alt' ></i>
      </template>
    </vd-button>

    <vd-button
      flat
      success
      animation-type="vertical"
    >
      Message
      <template #animate >
        <i class='bx bx-mail-send' ></i> Send
      </template>
    </vd-button>

    <vd-button
      gradient
      style="min-width: 60px"
      warn
      animation-type="scale"
    >
      <i class='bx bxs-shopping-bag' ></i>
      <template #animate >
        Store
      </template>
    </vd-button>

    <vd-button
      icon
      relief
      danger
      animation-type="rotate"
    >
      <i class='bx bx-like'></i>
      <template #animate >
        <i class='bx bxs-like' ></i>
      </template>
    </vd-button>
  </div>
</template>
<script>
export default defineComponent({
  data: () => ({
    active: 0
  })
  
})
</script>
<style lang="stylus" scoped>
.center
  max-width 400px
  margin auto
</style>

