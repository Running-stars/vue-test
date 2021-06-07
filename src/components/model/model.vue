<template>
  <div class="model">
    <div v-for="(item,index) in arrs" :key="index">
      <input type="text" :value="item.name" @input="inputs(item,$event)" />
    </div>
    <!-- <input type="text" :value="value" @input="inputs"> -->
    <button @click="save">save</button>
  </div>
</template>
<script>
export default {
  name: "model",
  props: ['value'],
  data() {
    return {
      arrs: []
    };
  },
  watch: {
    value: {
      handler(val) {
        this.arrs = JSON.parse(JSON.stringify(val))
      },
      deep: true,
      immediate: true,
    }
  },
  mounted() {
  },
  methods: {
    inputs(val,e) {
      val.name = e.target.value
      // this.$emit('input', this.arrs);
    },
    save() {
      this.$emit('input', this.arrs);
    }
  },
  beforeDestroy() {
  },
};
</script>
<style lang="less" scoped>

</style>
