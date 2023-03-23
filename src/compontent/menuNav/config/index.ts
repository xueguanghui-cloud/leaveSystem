export const constuserMenuList = {
  student: [
    {
      id: '1',
      type: 1,
      menuName: '请/销假页',
      children: [
        {
          id: '1_1',
          type: 2,
          menuName: '请假页'
        },
        {
          id: '1_2',
          type: 2,
          menuName: '销假页'
        }
      ]
    },
    {
      id: '2',
      type: 1,
      menuName: '个人页',
      children: [
        {
          id: '2_1',
          type: 2,
          menuName: '个人中心'
        },
        {
          id: '2_2',
          type: 2,
          menuName: '个人设置'
        }
      ]
    }
  ],
  teacher: [
    {
      id: '1',
      type: 1,
      menuName: '审批页',
      children: [
        {
          id: '1_1',
          type: 2,
          menuName: '请假审批'
        },
        {
          id: '1_2',
          type: 2,
          menuName: '销假审批'
        }
      ]
    },
    {
      id: '2',
      type: 1,
      menuName: '个人页',
      children: [
        {
          id: '2_1',
          type: 2,
          menuName: '个人中心'
        },
        {
          id: '2_2',
          type: 2,
          menuName: '个人设置'
        }
      ]
    }
  ],
  admin: [
    {
      id: '1',
      type: 1,
      menuName: '用户列表',
      children: [
        {
          id: '1_1',
          type: 2,
          menuName: '学生列表'
        },
        {
          id: '1_2',
          type: 2,
          menuName: '教职工列表'
        }
      ]
    },
    {
      id: '2',
      type: 1,
      menuName: '个人页',
      children: [
        {
          id: '2_1',
          type: 2,
          menuName: '个人中心'
        },
        {
          id: '2_2',
          type: 2,
          menuName: '个人设置'
        }
      ]
    }
  ]
}
