<template>
  <div class="model">
    model
    <!-- <models v-model="arr" @input="input" /> input事件默认可不写 -->
    <models v-model="arr" />
    <button @click="show">show</button>
  </div>
</template>
<script>
import models from "@/components/model/model.vue"
export default {
  name: "model",
  data() {
    return {
      arr: [
        {
          id: 1,
          name: 'bob'
        },
        {
          id: 2,
          name: 'tom'
        }
      ],
      msg: 'hello'
    };
  },
  components: {
    models
  },
  mounted() {
    },
  methods: {
    // v-model默认input
    // input(val) {
    //   this.arr = val;
    //   console.log('val',val)
    // },
    show() {
      console.log(this.arr)
    }
  },
  beforeDestroy() {
  },
};
</script>
<style lang="less" scoped>

</style>
