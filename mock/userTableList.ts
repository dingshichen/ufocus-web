import { Request, Response } from 'express';

const getUsers = (req: Request, res: Response) => {
  res.json({
    data: [
      {
        id: 1,
        chnName: "超级管理员",
        emailAddress: "10000@qq.com",
        role: {
          id: 1,
          chnName: "超级管理员",
        },
        isLockFlag: false,
        createUser: {
          id: 1,
          chnName: "超级管理员",
        },
        createTime: "2023-09-01 12:00:00"
      },
      {
        id: 2,
        chnName: "丁时辰",
        mobilePhoneNumber: "17705505750",
        emailAddress: "foreverhuiqiao@126.com",
        role: {
          id: 2,
          chnName: "管理员",
        },
        isLockFlag: true,
        createUser: {
          id: 1,
          chnName: "超级管理员",
        },
        createTime: "2023-09-01 12:00:00"
      },
    ]
  })
}

export default {
  'GET /api/user': getUsers,
}
