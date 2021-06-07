<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">secondTask</router-link> |
      <router-link to="/about">thirdTask</router-link> |
      <router-link to="/fourth">fourthTask</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
#nav{
  text-align: center;
  padding-top: 50px;
}
</style>
