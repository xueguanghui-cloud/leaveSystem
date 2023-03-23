import type { App } from 'vue'
import registerIconFont from './register-iconfont'

export function registerApp(app: App) {
  app.use(registerIconFont)
}
