import { Request, Response } from 'express';

const defect = (req: Request, res: Response) => {
  res.json({
    data: {
      total: 2,
      size: 10,
      current: 1,
      records: [
        {
          id: 1,
          defectTitle: "样式不对",
          project: {
            id: 1,
            projectName: "核型项目A",
          },
          responsibleUser: {
            id: '1735560201238421505',
            chnName: '刘彬'
          },
          createUser: {
            id: '1735560201238421505',
            chnName: '刘彬'
          },
          createTime: '2023-07-01 12:12:12',
        },
        {
          id: 2,
          defectTitle: "数据有错误",
          responsibleUser: {
            id: '1735560201238421505',
            chnName: '刘彬'
          },
          createUser: {
            id: '1735560201238421505',
            chnName: '刘彬'
          },
          createTime: '2023-07-01 12:12:12',
        }
      ]
    }
  })
}

const load = (req: Request, res: Response) => {
  res.json({
    data: {
      id: 1,
      defectTitle: "开发一个很棒的功能1",
      project: {
        id: 1,
        projectName: "核型项目A",
      },
      responsibleUser: {
        id: '1735560201238421505',
        chnName: '刘彬'
      },
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

export default {
  'POST /api/defect/page': defect,
  'GET /api/defect/1': load,
  'GET /api/defect/2': load,
}
