<template>
  <div class="conversion">
    <p>人民币 ￥{{CNY}}</p>
    <p>英镑 {{rates | filter('Gbp',CNY)}}</p>
  </div>
</template>
<script>
export default {
  props: ['rates'],
  data() {
    return {
      CNY: 123456,
    };
  },
  filters: {
    filter (val,msg,CNY) {
      let index = val.findIndex(res=>{
        return res.type == msg
      })
      let num = val[index]['rate'] * CNY
      return `$${num}`
    }
  },
}
</script>
<style lang="less" scoped>
  p{
    margin: 0;
  }
  .conversion{
    background-color: rgb(85, 147, 240);
    text-align: center;
  }
</style>
