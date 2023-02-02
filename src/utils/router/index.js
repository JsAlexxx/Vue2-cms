import router from '@/router';
import store from '@/store';

import {roleMenu} from '@/utils/data';

import { setUserInfo } from '@/utils/app'

/**
 * 创建动态路由
 * @param {String} role 参数：用户权限，字符串
 * @returns
 */
export const createPrivateRoutes = (roleMenu, role) => {
  const res = {}
  res.path = roleMenu.path
  res.name = roleMenu.name
  res.component = roleMenu.component
  if (roleMenu.hasOwnProperty('redirect')) {
    res.redirect = roleMenu.redirect
  }
  if (roleMenu.hasOwnProperty('children')) {
    res.children = []
    roleMenu.children.forEach(menuChildItem => {
      if (menuChildItem.role.includes(role)) {
        const resChildItem = createPrivateRoutes(menuChildItem, role)
        res.children.push(resChildItem)
      }
    });
  }
  return res
}

export const addDynamicRoutes = async () => {
  let userInfo = store.getters.hasUserInfo
  if(!userInfo) {
    await setUserInfo()
    userInfo = store.getters.hasUserInfo
  }
  const privateRoutes = createPrivateRoutes(roleMenu, userInfo.role);
  store.commit(
    "router/addPrivateRoutesToStore",
    privateRoutes
  );
  router.addRoute(store.getters.hasPrivateRoutes);
}

