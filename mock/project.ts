import { Request, Response } from 'express';
import {req} from "pino-std-serializers";

const project = (req: Request, res: Response) => {
  res.json({
    data: {
      total: 2,
      size: 10,
      current: 1,
      records: [
        {
          id: 1,
          projectName: "核型项目A",
          responsibleUser: {
            id: '1735560201238421505',
            chnName: '刘彬'
          }
        },
        {
          id: 2,
          projectName: "常规项目B",
          responsibleUser: {
            id: '1735560201238421505',
            chnName: '刘彬'
          }
        }
      ]
    }
  })
}

const load = (req: Request, res: Response) => {
  res.json({
    data: {
      id: 1,
      projectName: "核型项目A",
      responsibleUser: {
        id: '1735560201238421505',
        chnName: '刘彬'
      },
      projectDesc: '这是一个测试项目',
      createUser: {
        id: '1735560201238421505',
        chnName: '刘彬'
      },
      createTime: '2023-07-01 12:12:12',
      updateUser: {
        id: '1735560201238421505',
        chnName: '刘彬'
      },
      updateTime: '2023-07-01 12:12:12',
    }
  })
}

const select = (req: Request, res: Response) => {
  res.json({
    data: [
      {
        id: 1,
        projectName: "核型项目A",
      },
      {
        id: 2,
        projectName: "常规项目B",
      }
    ]
  })
}

export default {
  'POST /api/project/page': project,
  'GET /api/project/select': select,
  'GET /api/project/1': load,
  'GET /api/project/2': load,
}
