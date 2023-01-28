/**
 * 创建动态路由
 * @param {String} role 参数：用户权限，字符串
 * @returns
 */
export const createPrivateRoutes = (roleMenu,role) => {
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
        const resChildItem = createPrivateRoutes(menuChildItem,role)
        res.children.push(resChildItem)
      }
    });
  }
  return res
}
