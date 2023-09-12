import { Request, Response } from 'express';

const ticket = (req: Request, res: Response) => {
  res.json({
    data: [
      {
        id: 1,
        ticketTitle: "考核创建表结构",
        dbGroup: {
          id: 2,
          groupName: "MySQL测试所有"
        },
        forceVerificationFlag: true,
        verificationState: "验证通过",
        auditState: "审核通过",
        performState: "执行成功",
        createUser: {
          id: 1,
          chnName: "超级管理员"
        },
        createTime: "2023-09-01 12:00:00",
      },
      {
        id: 1,
        ticketTitle: "考核数据初始化",
        dbGroup: {
          id: 2,
          groupName: "MySQL测试所有"
        },
        forceVerificationFlag: true,
        verificationState: "验证通过",
        auditState: "审核中",
        performState: "待执行",
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
  'GET /api/ticket': ticket,
}
