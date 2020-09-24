<template>
  <!-- 轮播图组件 -->
  <div id="swipe">
    <van-swipe :autoplay="3000" :height="200">
      <van-swipe-item
        v-for="(image, index) in images"
        :key="index + new Date()"
      >
        <img :src="$imgDomain + image.s_url" />
        <!-- <img :v-lazy="$imgDomain + image.s_url" /> -->
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import axios from "axios";
import { Swipe, SwipeItem } from "vant";
export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
    // [Lazyload.name]: Lazyload
  },
  data() {
    return {
      images: []
    };
  },
  mounted() {
    // this.getInfo(); // 测试，是否访问到nodeServer服务器资源
    this.getData();
  },
  methods: {
    getInfo() {
      axios.get("/api/users/show", {}).then(res => {
        if (res.data) {
          console.log(res.data);
        } else {
          console.log("---------空-------------------");
        }
      });
    },
    getData() {
      axios.get("/api/fileUpload/showImages/swipe", {}).then(res => {
        if (res.data) {
          this.images = JSON.parse(JSON.stringify(res.data.content));
          console.log(this.images);
        } else {
          console.log("---------空-------------------");
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
#swipe {
  .van-swipe-item {
    img {
      width: 100%;
    }
  }
}
</style>
