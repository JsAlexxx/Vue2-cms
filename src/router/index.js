import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import LoginView from '@/views/login/LoginView'

import store from '@/store';

import { addDynamicRoutes } from '@/utils/router';

const publicRoutes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
]

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: publicRoutes
});

const whitleList = ['/login']
router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('token')
  if (token) {
    if(to.path === '/login' || to.path === '/') {
      next('/home')
      console.log(from.path, '登录后的拦截');
    }

    if (!store.getters.hasPrivateRoutes) {
      addDynamicRoutes()
      next({ ...to, replace: true })
      console.log(from.path, '本身无私人路由，动态添加路由后的跳转');
    } else {
      next()
      console.log(from.path, '存在动态添加路由时的跳转');
    }
  } else {
    if (whitleList.includes(to.path)) {
      next()
      console.log(from.path, '白名单防止死循环');
    } else {
      next('/login')
      console.log(from.path, '没有token,登录的跳转');
    }
  }
});

export default router;
