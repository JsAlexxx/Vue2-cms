import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import header from './header/';
import router from './router/';

export default new Vuex.Store({
  state: {},
  getters: {
    isAsideCollapse: state => state.header.isAsideCollapse,
    hasPrivateRoutes: state => state.router.hasPrivateRoutes
  },
  mutations: {},
  actions: {},
  modules: {
    header,
    router
  },
});
