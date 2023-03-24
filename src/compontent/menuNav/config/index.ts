export interface UserMenu {
  id: string
  type: 1 | 2
  menuName: string
  icon: string
  path?: string
  children?: UserMenu[]
}

export const constuserMenuList: {
  student: UserMenu[]
  teacher: UserMenu[]
  admin: UserMenu[]
  superAdmin: UserMenu[]
} = {
  student: [
    {
      id: '1',
      type: 1,
      menuName: '请/销假页',
      icon: 'icon-qingjiaxiaojia',
      children: [
        {
          id: '1_1',
          type: 2,
          path: '/main/leaveorsale/leave',
          icon: 'icon-qingjia1',
          menuName: '请假页'
        },
        {
          id: '1_2',
          type: 2,
          path: '/main/leaveorsale/sale',
          icon: 'icon-xiaojiashenqing',
          menuName: '销假页'
        }
      ]
    },
    {
      id: '2',
      type: 1,
      icon: 'icon-geren',
      menuName: '个人页',
      children: [
        {
          id: '2_1',
          type: 2,
          icon: 'icon-gerenzhongxin',
          path: '/main/user/userCenter',
          menuName: '个人中心'
        },
        {
          id: '2_2',
          type: 2,
          icon: 'icon-gerenshezhi',
          path: '/main/user/userSet',
          menuName: '个人设置'
        }
      ]
    }
  ],
  teacher: [
    {
      id: '1',
      type: 1,
      icon: 'icon-jurassic_audit-something',
      menuName: '审批页',
      children: [
        {
          id: '1_1',
          type: 2,
          icon: 'icon-shenpi',
          path: '/main/approval/leave',
          menuName: '请假审批'
        },
        {
          id: '1_2',
          type: 2,
          icon: 'icon-shenpi1',
          path: '/main/approval/sale',
          menuName: '销假审批'
        }
      ]
    },
    {
      id: '2',
      type: 1,
      icon: 'icon-geren',
      menuName: '个人页',
      children: [
        {
          id: '2_1',
          type: 2,
          icon: 'icon-gerenzhongxin',
          path: '/main/user/userCenter',
          menuName: '个人中心'
        },
        {
          id: '2_2',
          type: 2,
          icon: 'icon-gerenshezhi',
          path: '/main/user/userSet',
          menuName: '个人设置'
        }
      ]
    }
  ],
  admin: [
    {
      id: '1',
      type: 1,
      icon: 'icon-pingtaiiconhuizong_huaban1fuben4',
      menuName: '用户列表',
      children: [
        {
          id: '1_1',
          type: 2,
          icon: 'icon-xueshengliebiao',
          path: '/main/userlist/student',
          menuName: '学生列表'
        },
        {
          id: '1_2',
          type: 2,
          icon: 'icon-icon_jiaozhigongguanli',
          path: '/main/userlist/teacher',
          menuName: '教职工列表'
        }
      ]
    },
    {
      id: '2',
      type: 1,
      icon: 'icon-geren',
      menuName: '个人页',
      children: [
        {
          id: '2_1',
          type: 2,
          icon: 'icon-gerenzhongxin',
          path: '/main/user/userCenter',
          menuName: '个人中心'
        },
        {
          id: '2_2',
          type: 2,
          icon: 'icon-gerenshezhi',
          path: '/main/user/userSet',
          menuName: '个人设置'
        }
      ]
    }
  ],
  superAdmin: [
    {
      id: '1',
      type: 1,
      menuName: '请/销假页',
      icon: 'icon-qingjiaxiaojia',
      children: [
        {
          id: '1_1',
          type: 2,
          path: '/main/leaveorsale/leave',
          icon: 'icon-qingjia1',
          menuName: '请假页'
        },
        {
          id: '1_2',
          type: 2,
          path: '/main/leaveorsale/sale',
          icon: 'icon-xiaojiashenqing',
          menuName: '销假页'
        }
      ]
    },
    {
      id: '2',
      type: 1,
      icon: 'icon-jurassic_audit-something',
      menuName: '审批页',
      children: [
        {
          id: '2_1',
          type: 2,
          icon: 'icon-shenpi',
          path: '/main/approval/leave',
          menuName: '请假审批'
        },
        {
          id: '2_2',
          type: 2,
          icon: 'icon-shenpi1',
          path: '/main/approval/sale',
          menuName: '销假审批'
        }
      ]
    },
    {
      id: '3',
      type: 1,
      icon: 'icon-pingtaiiconhuizong_huaban1fuben4',
      menuName: '用户列表',
      children: [
        {
          id: '3_1',
          type: 2,
          icon: 'icon-xueshengliebiao',
          path: '/main/userlist/student',
          menuName: '学生列表'
        },
        {
          id: '3_2',
          type: 2,
          icon: 'icon-icon_jiaozhigongguanli',
          path: '/main/userlist/teacher',
          menuName: '教职工列表'
        }
      ]
    },
    {
      id: '4',
      type: 1,
      icon: 'icon-geren',
      menuName: '个人页',
      children: [
        {
          id: '4_1',
          type: 2,
          icon: 'icon-gerenzhongxin',
          path: '/main/user/userCenter',
          menuName: '个人中心'
        },
        {
          id: '_2',
          type: 2,
          icon: 'icon-gerenshezhi',
          path: '/main/user/userSet',
          menuName: '个人设置'
        }
      ]
    }
  ]
}
