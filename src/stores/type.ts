import type { UserMenu } from '@/compontent/menuNav/config'
import type { User } from '@/types/user'
export interface UserStore {
  userInfo: User
  userMenus: UserMenu[]
}
