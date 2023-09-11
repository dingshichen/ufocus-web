import { Request, Response } from 'express';

const getDbInstance = (req: Request, res: Response) => {
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

const loadDbInstance = (req: Request, res: Response) => {
  if (req.url.startsWith("/api/db/instance/1?")) {
    res.json({
      id: 1,
      dbInstanceName: "MySQL测试环境主库",
      dbProductCode: "MySQL",
      dbProductVersionNumber: "8.0",
      linkAddress: "localhost:3306",
      account: "dagp",
      password: "dagp",
      createUser: {
        id: 1,
        chnName: "超级管理员"
      },
      createTime: "2023-09-01 12:00:00"
    })
  } else if (req.url.endsWith("/api/db/instance/2?")) {
    res.json({
      id: 2,
      dbInstanceName: "DM测试环境租户库",
      dbProductCode: "DAMENG",
      dbProductVersionNumber: "8.0",
      linkAddress: "localhost:3306",
      account: "dagp",
      password: "dagp",
      createUser: {
        id: 2,
        chnName: "小明"
      },
      createTime: "2023-09-01 12:00:00"
    })
  } else if (req.url.endsWith("/api/db/instance/3?")) {
    res.json({
      id: 3,
      dbInstanceName: "GAUSSDB测试环境主库",
      dbProductCode: "GAUSSDB",
      dbProductVersionNumber: "2.0",
      linkAddress: "localhost:3306",
      account: "dagp",
      password: "dagp",
      createUser: {
        id: 2,
        chnName: "小明"
      },
      createTime: "2023-09-01 12:00:00"
    })
  }
}

const deleteDbInstance = (req: Request, res: Response) => {
  res.json({})
}

export default {
  'GET /api/db/instance': getDbInstance,
  'GET /api/db/instance/1': loadDbInstance,
  'GET /api/db/instance/2': loadDbInstance,
  'GET /api/db/instance/3': loadDbInstance,
  'DELETE /api/db/instance/1': deleteDbInstance,
  'DELETE /api/db/instance/2': deleteDbInstance,
  'DELETE /api/db/instance/3': deleteDbInstance,
}
