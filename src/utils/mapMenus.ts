import type { RouteRecordRaw } from 'vue-router'
import type { UserMenu } from '@/compontent/menuNav/config/index'

let firstMenu: UserMenu
export async function mapMenusToRoutes(userMenus: UserMenu[]): Promise<RouteRecordRaw[]> {
  const routes: RouteRecordRaw[] = []

  // 1. 先去加载默认的routes
  const allRoutes: RouteRecordRaw[] = []
  // 读取router/main文件夹下所有的ts文件
  const routeFiles = import.meta.glob('../router/main/**/*.ts')

  for (const key in routeFiles) {
    const component = routeFiles[key]
    const module: any = await component()
    console.log(module.default)
    allRoutes.push(module.default)
  }

  // 2. 根据菜单获取需要添加的routes
  const _recurseGetRoute = (menus: UserMenu[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.path)

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

  return routes
}

export { firstMenu }
