import type { RouteRecordRaw } from 'vue-router'
import type { UserMenu } from '@/compontent/menuNav/config/index'

let firstMenu: any = null
export function mapMenusToRoutes(userMenus: UserMenu[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1. 先去加载默认的routes
  const allRoutes: RouteRecordRaw[] = []
  // 读取router/main文件夹下所有的ts文件
  const routeFiles = import.meta.glob('../router/main/**/*.ts')

  for (const key in routeFiles) {
    const component = routeFiles[key]
    const name = key.replace('../router/main', '').replace('.ts', '')
    const route = {
      path: name,
      component
    }
    allRoutes.push(route)
  }

  // 2. 根据菜单获取需要添加的routes

  const _recurseGetRoute = (menus: UserMenu[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        console.log(menu)

        const route = allRoutes.find((route) => route.path === menu.path)
        // console.log(route)

        if (route) routes.push(route)
        if (!firstMenu) {
          firstMenu = menu
        }
      } else if (menu.type === 1) {
        _recurseGetRoute(menu.children!)
      }
    }
  }
  _recurseGetRoute(userMenus)
  console.log(routes)

  return routes
}
