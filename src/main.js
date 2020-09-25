import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Env from "@constants/env"; // 引入env.js全局配置文件，无论开发环境还是生成环境都会加载
import "@assets/style/index.scss"; // 引入全局样式文件，包括iconfont字体库

Vue.config.productionTip = false;

Vue.prototype.$imgDomain = Env.imgDomain;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
