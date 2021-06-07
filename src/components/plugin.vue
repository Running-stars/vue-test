<template>
  <div class="plugin">
    <div class="admin" v-isShow:admin="val">
      管理员才能看到
      <div>
        公司成本：<span>{{rmb|filter('￥')}}</span>
        折算成美金：<span>{{rmb|filter('$',rate)}}</span>
      </div>
    </div>
    <div class="user" v-isShow:user="val">（普通用户/管理员）可以看到</div>
    <div class="guest" v-isShow:guest="val">（访客/管理员）可以看到</div>
  </div>
</template>
<script>
export default {
  name: "plugin",
  data() {
    return {
      val: 'user',
      rmb: 0,
      rate: 0,
    };
  },
  filters: {
    filter (msg,val,rate) {
      if(val=='￥'){
        return `${val}${msg}`
      }else{
        return `${val}${msg*rate}`
      }
    }
  },
  directives: {
    isShow: {
      inserted: function(el, binding) {
        el.style.display = binding.value==binding.arg||binding.value=='admin' ? "block" : "none";
      },
      update: function(el, binding) {
        el.style.display = binding.value==binding.arg||binding.value=='admin' ? "block" : "none";
      }
    }
  },
  methods: {}
};
</script>
<style lang="less" scoped>
  .plugin{
    .admin,
    .user,
    .guest{
      text-align: center;
      margin-top: 10px;
      background-color: rgb(85, 147, 240);
    }
  }
</style>
