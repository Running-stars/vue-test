<template>
  <div class="fourthTask">
    <el-button @click="getRole" :loading="isShow">获取随机角色为--{{roleName}}</el-button>
    <div id="fourthTask"></div>
  </div>
</template>
<script>
export default {
  name: "fourth",
  data() {
    return {
      roleName: '',
      isShow: false,
      timer: null
    };
  },
  mounted() {
    this.getRole()
  },
  methods: {
    getRole() {
      this.isShow = true
      this.timer = setTimeout(() => {
        let roleName = ["admin", "user", "guest"].sort(()=> Math.random()-Math.random())[0];
        this.roleName = roleName
        this.isShow = false
        this.$myPlugin(document.querySelector('#fourthTask'),{
          name: roleName,
          rmb: 100,
          rate: 7
        })
      }, 2000);
    }
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  },
};
</script>
<style lang="less" scoped>
  .fourthTask{
    text-align: center;
    margin-top: 20px;
  }
</style>
