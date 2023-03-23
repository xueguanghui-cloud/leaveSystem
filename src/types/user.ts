export interface User {
  createTime: string
  deptId: string
  email: string
  gender: number
  id: number
  phone: string
  sno: number
  updateTime: string
  userAvatar: string
  userGrade: string
  userName: string
  userProfile: string
  userRole: 'student' | 'teacher' | 'admin'
}
