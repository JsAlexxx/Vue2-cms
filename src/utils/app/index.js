import store from '@/store';
import { getUserInfo } from '@/utils/api/user'
import { Message } from 'element-ui';

export const createAsideMenu = (roleMenu, role) => {
  const formatMenu = (menuItem) => {
    const res = {}
    res.path = menuItem.path
    res.title = menuItem.title
    res.icon = menuItem.icon
    return res
  }

  const asideMenuRes = []
  roleMenu.children.forEach(menuItem => {
    if (menuItem.role.includes(role)) {
      asideMenuRes.push(formatMenu(menuItem))
    }
  });
  return asideMenuRes
}

export const setUserInfo = async () => {
  const userInfoRes = await getUserInfo()
  if(userInfoRes) {
    if(userInfoRes.data) {
      const userInfoObj = userInfoRes.data
      store.commit('user/addUserInfo', userInfoObj)
    } else {
      Message.error(userInfoRes.msg)
    }
  }
}
