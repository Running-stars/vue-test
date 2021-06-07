<template>
  <div class="home">
    <!-- <HelloWorld>
      <template v-slot:header="msg">
        {{msg.msg}}
      </template>
      <template v-slot:footer="foote">
        {{foote.footer}}
      </template>
      <template>
        默认
      </template>
    </HelloWorld>
    <input v-inits="text"> -->
    <TheSecondTask>
      <template v-slot:body="datas">
        <div v-show="datas.datas==undefined">loading...</div>
        <div v-show="datas.datas || datas.datas==0">{{datas.datas | toDor('pv-')}}</div>
      </template>
    </TheSecondTask>
    <TheSecondTask>
      <template v-slot:body="datas">
        <div v-show="datas.datas==undefined" class="red">@@@@@获取数据@@@@@</div>
        <div v-show="datas.datas || datas.datas==0">{{datas.datas | toDor('pv-')}}</div>
      </template>
    </TheSecondTask>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TheSecondTask from '@/components/theSecondTask.vue'

export default {
  name: 'Home',
  data () {
    return {
      text: 'value',
      isShow: 'TheSecondTask'
    }
  },
  components: {
    HelloWorld,
    TheSecondTask
  },
  methods: {},
  // directives: {
  //   inits: {
  //     bind (el, binding, vnode) {
  //       function inputs (event) {
  //         console.log(event, this)
  //         this.context.$data[this.binding.expression] = event.target.value
  //       }
  //       const fn = inputs.bind({
  //         context: vnode.context,
  //         binding
  //       })
  //       el.oninput = fn
  //     }
  //   }
  // }
}
</script>
<style lang="less" scoped>
  .home{
    text-align: center;
  }
</style>
