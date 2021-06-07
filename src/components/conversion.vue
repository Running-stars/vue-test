<template>
  <div class="conversion">
    <el-checkbox-group v-model="checkList">
      <el-checkbox label="Usd">美金</el-checkbox>
      <el-checkbox label="Jpy">日币</el-checkbox>
      <el-checkbox label="Gbp">英镑</el-checkbox>
    </el-checkbox-group>
    <div class="items" v-for="item in checkList" :key="item" :is="item" :rates="rates"></div>
  </div>
</template>
<script>
import Usd from "@/components/conversions/usd.vue"
import Jpy from "@/components/conversions/jpy.vue"
import Gbp from "@/components/conversions/gbp.vue"
export default {
  data() {
    return {
      checkList: ['Usd'],
      rates : [
        {
          type: 'Usd',
          rate: 6,
        }
      ],
      timer: undefined,
    }
  },
  watch: {
    checkList(val) {
      this.time(val)
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      this.time()
    }, 2000);
  },
  methods: {
    time(val) {
      let vals = val || this.rates
      this.rates = vals.map((r) => {
        if(val){
          return this.refresh(r);
        }
        return this.refresh(r.type);
      });
    },
    refresh(type) {
      return {
        type,
        rate: Math.random()
      }
    },
    get() {
      return this.rates;
    },
    update(types) {
      this.rates = types.map((type) => {
        return this.refresh(type);
      });
    },
  },
  components: {
    Usd,
    Jpy,
    Gbp
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
}
</script>
<style lang="less" scoped>
  .conversion{
    color: #fff;
    text-align: center;
    margin-top: 20px;
    .items{
      margin-top: 10px;
    }
  }
</style>
