import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// css
import '@/styles/main.scss'
import 'normalize.css/normalize.css'

// utils
import {useEle} from '@/utils/plugins/element';
Vue.use(useEle)

// echarts
import echarts from '@/components/echarts';
Vue.prototype.$echarts = echarts

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
