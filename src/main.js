import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

//css
import '@/styles/main.scss'
import 'normalize.css/normalize.css'

//utils
import utils from '@/utils'
const useEle = utils.plugin.useEle
Vue.use(useEle)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
