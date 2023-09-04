import { Request, Response } from 'express';

const getUsers = (req: Request, res: Response) => {
  res.json({
    data: [
      {
        id: 1,
        chnName: "超级管理员",
        mobilePhoneNumber: "10000",
        emailAddress: "10000@qq.com",
        isLockFlag: 0,
        createUser: "超级管理员",
        createTime: "2023-09-01 12:00:00"
      },
      {
        id: 2,
        chnName: "丁时辰",
        mobilePhoneNumber: "17705505750",
        isLockFlag: 0,
        createUser: "管理员",
        createTime: "2023-09-01 12:00:00"
      },
    ]
  })
}

export default {
  'GET /api/user': getUsers,
}
