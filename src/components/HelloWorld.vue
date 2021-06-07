<template>
  <div class="hello">
    <div class="header">
      <slot name='header' v-bind:msg="msg"></slot>
    </div>
    <div class="default">
      <slot></slot>
    </div>
    <div class="footer">
      <slot name='footer' v-bind:footer="foote"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data  () {
    return {
      msg: '890',
      foote: 'foots'
    }
  },
  filters: {
    filter (val) {
      return `$${val}`
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
