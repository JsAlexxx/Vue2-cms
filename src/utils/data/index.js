export const roleMenu = {
  path: '/home',
  name: 'home',
  redirect: '/home/index',
  component: () => import('@/views/home/HomeView'),
  children: [
    {
      path: '/home/index',
      name: 'index',
      role: ['admin', 'supAdmin', 'user'],
      icon: 'el-icon-s-home',
      title: '首页',
      component: () => import('@/views/home/compoents/index/'),
    },
    {
      path: '/home/user',
      name: 'user',
      role: ['admin', 'supAdmin'],
      title: "用户管理",
      icon: "el-icon-user",
      component: () => import('@/views/home/compoents/user/'),
    },
    {
      path: "/home/calender",
      name: "calender",
      role: ['supAdmin'],
      title: "日程安排",
      icon: "el-icon-s-claim",
      component: () => import('@/views/home/compoents/calender'),
    },
    {
      path: "/home/setting",
      name: "setting",
      role: ['admin', 'supAdmin', 'user'],
      title: "个人设置",
      icon: "el-icon-setting",
      component: () => import('@/views/home/compoents/setting'),
    },
    {
      path: "/home/other1",
      name: "other1",
      role: ['admin', 'supAdmin', 'user'],
      title: "其他页面1",
      sub: true,
      icon: "el-icon-setting",
      component: () => import('@/views/home/compoents/other'),
    },
  ]
}






