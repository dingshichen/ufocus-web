import { Request, Response } from 'express';

const dbInstance = (req: Request, res: Response) => {
  res.json({
    data: [
      {
        id: 1,
        dbInstanceName: "MySQL测试环境主库",
        dbProductCode: "MySQL",
        dbProductVersionNumber: "8.0",
        linkAddress: "localhost:3306",
        createUser: {
          id: 1,
          chnName: "超级管理员"
        },
        createTime: "2023-09-01 12:00:00"
      },
      {
        id: 2,
        dbInstanceName: "DM测试环境租户库",
        dbProductCode: "DAMENG",
        dbProductVersionNumber: "8.0",
        linkAddress: "localhost:3306",
        createUser: {
          id: 2,
          chnName: "小明"
        },
        createTime: "2023-09-01 12:00:00"
      },
      {
        id: 3,
        dbInstanceName: "GAUSSDB测试环境主库",
        dbProductCode: "GAUSSDB",
        dbProductVersionNumber: "2.0",
        linkAddress: "localhost:3306",
        createUser: {
          id: 2,
          chnName: "小明"
        },
        createTime: "2023-09-01 12:00:00"
      },
    ]
  })
}

export default {
  'GET /api/db/instance': dbInstance,
}
