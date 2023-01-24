import Vue from "vue";
import VueRouter from "vue-router";

import LoginView from '@/views/Login/LoginView'

Vue.use(VueRouter);

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
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home/HomeView.vue')
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: publicRoutes
});

export default router;
