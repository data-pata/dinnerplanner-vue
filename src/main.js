import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store/store" // why(not) the mustache, { store } ?

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
