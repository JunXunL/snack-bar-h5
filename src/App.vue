<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Irene's Snack Bar</router-link>
      <router-link to="/about">login</router-link>
    </div>
    <!-- swiper 轮播图 -->
    <swiper></swiper>
    <!-- 频道入口 -->
    <!-- 首页商品区 -->
    <router-view />
    <!-- 回到顶部 -->
    <goTop :btnFlag="btnFlag"></goTop>
  </div>
</template>

<script>
import goTop from "@components/public/goTop";
import swiper from "@components/public/swiper";
export default {
  data() {
    return {
      btnFlag: false
    };
  },
  components: {
    goTop,
    swiper
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  a {
    font-weight: bold;
    color: #2c3e50;
    font-size: 16px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
