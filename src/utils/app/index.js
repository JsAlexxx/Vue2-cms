export const createAsideMenu = (roleMenu, role) => {
  const formatMenu = (menuItem) => {
    const res = {}
    res.path = menuItem.path
    res.title = menuItem.title
    res.icon = menuItem.icon
    return res
  }

  const asideMenuRes = []
  roleMenu.children.forEach( menuItem => {
    if(menuItem.role.includes(role)) {
      asideMenuRes.push(formatMenu(menuItem))
    }
  });
  return asideMenuRes
}
