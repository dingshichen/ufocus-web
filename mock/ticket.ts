import { Request, Response } from 'express';

const ticket = (req: Request, res: Response) => {
  res.json({
    data: [
      {
        id: 1,
        ticketTitle: '考核创建表结构',
        module: '数据标准',
        dbGroup: {
          id: 2,
          groupName: 'MySQL测试所有',
        },
        auditState: 'APPROVE',
        performState: 'SUCCESS',
        createUser: {
          id: 1,
          chnName: '超级管理员',
        },
        createTime: '2023-09-01 12:00:00',
      },
      {
        id: 2,
        ticketTitle: '考核数据初始化',
        module: '元数据',
        dbGroup: {
          id: 2,
          groupName: 'MySQL测试所有',
        },
        auditState: 'REJECT',
        performState: 'WAIT',
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
  'GET /api/ticket': ticket,
};
