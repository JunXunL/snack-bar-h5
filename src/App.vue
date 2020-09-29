<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Irene's Snack Bar</router-link>
      <router-link to="/about">login</router-link>
    </div>
    <!-- swiper 轮播图 -->
    <swiper></swiper>
    <!-- 频道入口 -->
    <div id="channel" class="flex-row">
      <div class="channel content-box flex-column">
        <i class="iconfont icon-shipin channel-img title size-f-t"></i>
        <span class="channel-title title size-30">食品</span>
      </div>
      <div class="channel content-box flex-column">
        <i class="iconfont icon-shipin channel-img title size-f-t"></i>
        <span class="channel-title title size-f-t">食品</span>
      </div>
      <div class="channel content-box flex-column">
        <i class="iconfont icon-shipin channel-img title size-f-t"></i>
        <span class="channel-title title size-f-t">食品</span>
      </div>
    </div>
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
    font-size: $sLevelTitle;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#channel {
  .channel {
    width: 200px;
    height: 200px;
  }
}
</style>
