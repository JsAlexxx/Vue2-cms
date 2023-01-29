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

export const setStaticUserInfo = () => {
  getUserInfo()
  .then(res => {
    if (res.code === 200) {
      sessionStorage.setItem('userInfo', JSON.stringify(res.data))
    } else {
      Message.error(res.msg)
    }
  })
  .catch(res => {
    Message.error(res)}
  )
}
