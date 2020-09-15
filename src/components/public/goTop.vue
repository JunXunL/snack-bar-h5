<template>
  <div class="goTop" v-if="btnFlag" @click="backTop">
    <span>TOP</span>
  </div>
</template>
<script>
export default {
  name: "goTop",
  props: {
    btnFlag: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  methods: {
    // 点击图片回到页面顶部，使用计时器防止过度顺滑
    backTop() {
      const that = this;
      const timer = setInterval(() => {
        const speed = Math.floor(-that.scrollTop / 5);
        document.body.scrollTop = that.scrollTop + speed;
        document.documentElement.scrollTop = document.body.scrollTop;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    }
  }
};
</script>
<style lang="scss">
.goTop {
  position: fixed;
  bottom: 200px;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  right: 0px;
  color: #fff;
  background: #ccc;
  opacity: 0.7;
  z-index: 2000;
}
</style>
