import {Request, Response} from "express";

const role = (req: Request, res: Response) => {
  res.json({
    data: [
      {
        id: 1,
        chnName: '超级管理员',
        createUser: {
          id: 1,
          chnName: '超级管理员',
        },
        createTime: '2023-09-01 12:00:00',
      },
      {
        id: 2,
        chnName: '管理员',
        createUser: {
          id: 1,
          chnName: '超级管理员',
        },
        createTime: '2023-09-01 12:00:00',
      },
      {
        id: 3,
        chnName: '普通用户',
        createUser: {
          id: 1,
          chnName: '超级管理员',
        },
        createTime: '2023-09-01 12:00:00',
      },
    ],
  });
};

export default {
  'GET /api/role': role,
};
