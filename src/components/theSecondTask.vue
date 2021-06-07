<template>
  <div class="theSecondTask">
    <div class="header">
      <span class="header_l">访问量</span>
      <div class="header_r">
        <button @click="delData">清除</button>
      </div>
    </div>
    <div class="body">
      <slot name="body" v-bind:datas="datas"></slot>
    </div>
    <div class="footer">
      <button @click="getData(2000)">获取数据</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "theSecondTask",
  data() {
    return {
      value1: 0,
      value2: 0,
      datas: 0,
      timerid: null
    };
  },
  methods: {
    getData(time) {
      if(this.timerid) return
      this.datas = undefined;
      const num = Math.ceil(Math.random()*(1888-222)+222);
      this.timerid = setTimeout(() => {
        this.datas = num;
        clearTimeout(this.timerid)
        this.timerid = null
      }, time);
    },
    delData() {
      if(this.timerid) {
        clearTimeout(this.timerid)
        this.timerid = null
      }
      this.datas = 0;
    }
  }
};
</script>
<style lang="less" scoped>
.theSecondTask {
  width: 300px;
  height: 150px;
  border: 1px solid rgb(204, 204, 204);
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  .header {
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    line-height: 30px;
    border-bottom: 1px solid #ccc;
  }
  .body{
    flex: 1;
    align-self: center;
    line-height: 68px;
    .red{
      color: red;
    }
  }
  .footer{
    line-height: 50px;
    text-align: center;
    border-top: 1px solid #ccc;
  }
}
</style>
