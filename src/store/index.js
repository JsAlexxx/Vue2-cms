import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import header from './header/';
import router from './router/';
import user from "./user";
import home from './home';

export default new Vuex.Store({
  state: {},
  getters: {
    isAsideCollapse: state => state.header.isAsideCollapse,
    hasPrivateRoutes: state => state.router.hasPrivateRoutes,
    hasUserInfo: state => state.user.hasUserInfo,
    homeData: state => state.home.homeData
  },
  mutations: {},
  actions: {},
  modules: {
    header,
    router,
    user,
    home
  },
});
