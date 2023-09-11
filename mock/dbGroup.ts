import { Request, Response } from 'express';

const dbGroup = (req: Request, res: Response) => {
  res.json({
    data: [
      {
        id: 1,
        groupName: "MySQL测试主库",
        groupDesc: "EF开头的表只刷此数据库",
        dbInstances: [
          {
            id: 1,
            dbInstanceName: "xxx",
            dbProductCode: "ccc"
          }
        ],
        createUser: {
          id: 1,
          chnName: "超级管理员"
        },
        createTime: "2023-09-01 12:00:00",
      },
      {
        id: 2,
        groupName: "MySQL测试所有",
        groupDesc: "普通的表要刷所有数据库",
        dbInstances: [
          {
            id: 1,
            dbInstanceName: "xxx",
            dbProductCode: "ccc"
          }
        ],
        createUser: {
          id: 1,
          chnName: "超级管理员"
        },
        createTime: "2023-09-01 12:00:00",
      }
    ]
  })
}

export default {
  'GET /api/db/group': dbGroup,
}
