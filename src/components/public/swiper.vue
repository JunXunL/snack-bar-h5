<template>
  <div>
    <!-- 11 -->
  </div>
</template>
<script>
import axios from "axios";
// import Vue from "vue";
// import { Swipe, SwipeItem } from "vant";
export default {
  //   components: {
  //     Swipe,
  //     SwipeItem
  //   },
  data() {
    return {};
  },
  mounted() {
    this.getInfo();
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
    }
  }
};
</script>
<style lang="scss" scoped>
* {
  display: flex;
  flex-flow: column;
}
</style>
