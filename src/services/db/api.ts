import { request } from '@@/exports';
import {RequestData} from "@ant-design/pro-descriptions/es/useFetchData";
import {RequestOptionsType} from "@ant-design/pro-utils/es/typing";

export function toDbInstanceOption(dbInstance: API.DbInstanceOption): RequestOptionsType {
  return {
    label: dbInstance.dbInstanceName,
    value: dbInstance.id,
  }
}

export async function selectDbInstanceMock() {
  return new Promise<API.DbInstanceOption[]>((resolve) => {
    resolve([
      {
        id: 1,
        dbInstanceName: 'MySQL测试环境主库',
        dbProductCode: 'MYSQL',
      },
      {
        id: 2,
        dbInstanceName: 'DM测试环境租户库',
        dbProductCode: 'DAMENG',
      },
      {
        id: 3,
        dbInstanceName: 'GAUSSDB测试环境主库',
        dbProductCode: 'GAUSSDB',
      },
    ])
  })
}

export async function selectDbInstanceOptions(): Promise<RequestOptionsType[]> {
  const records = await selectDbInstanceMock();
  return records.map(toDbInstanceOption)
}

export async function loadDbInstanceMock(id: number) {
  return new Promise<API.DbInstanceDetail>((resolve) => {
    if (id === 1) {
      resolve({
        id: 1,
        dbInstanceName: 'MySQL测试环境主库',
        dbProductCode: 'MYSQL',
        linkAddress: 'localhost:3306',
        account: 'dagp',
        password: 'dagp',
        createUser: {
          id: 1,
          chnName: '超级管理员',
        },
        createTime: '2023-09-01 12:00:00',
        latestUpdateUser: {
          id: 1,
          chnName: '超级管理员',
        },
        latestUpdateTime: '2023-09-01 12:00:00',
      });
    } else if (id === 2) {
      resolve({
        id: 2,
        dbInstanceName: 'DM测试环境租户库',
        dbProductCode: 'DAMENG',
        linkAddress: 'localhost:3306',
        account: 'dagp',
        password: 'dagp',
        createUser: {
          id: 2,
          chnName: '小明',
        },
        createTime: '2023-09-01 12:00:00',
        latestUpdateUser: {
          id: 1,
          chnName: '超级管理员',
        },
        latestUpdateTime: '2023-09-01 12:00:00',
      });
    } else {
      resolve({
        id: 3,
        dbInstanceName: 'GAUSSDB测试环境主库',
        dbProductCode: 'GAUSSDB',
        linkAddress: 'localhost:3306',
        account: 'dagp',
        password: 'dagp',
        createUser: {
          id: 2,
          chnName: '小明',
        },
        createTime: '2023-09-01 12:00:00',
        latestUpdateUser: {
          id: 1,
          chnName: '超级管理员',
        },
        latestUpdateTime: '2023-09-01 12:00:00',
      });
    }
  });
}

export async function loadDbGroupMock(id: number) {
  return new Promise<API.DbGroupDetail>((resolve) => {
    if (id === 1) {
      resolve({
        id: 1,
        groupName: 'MySQL测试主库',
        groupDesc: 'EF开头的表只刷此数据库',
        dbInstances: [
          {
            id: 1,
            dbInstanceName: 'MySQL测试环境主库',
            dbProductCode: 'MYSQL',
          },
        ],
        createUser: {
          id: 1,
          chnName: '超级管理员',
        },
        createTime: '2023-09-01 12:00:00',
        latestUpdateUser: {
          id: 1,
          chnName: '超级管理员',
        },
        latestUpdateTime: '2023-09-01 12:00:00',
      });
    } else {
      resolve({
        id: 2,
        groupName: 'MySQL测试所有',
        groupDesc: '普通的表要刷所有数据库',
        dbInstances: [
          {
            id: 1,
            dbInstanceName: 'MySQL测试环境主库',
            dbProductCode: 'MYSQL',
          },
          {
            id: 2,
            dbInstanceName: 'MySQL测试环境从库',
            dbProductCode: 'MYSQL',
          },
        ],
        createUser: {
          id: 1,
          chnName: '超级管理员',
        },
        createTime: '2023-09-01 12:00:00',
        latestUpdateUser: {
          id: 1,
          chnName: '超级管理员',
        },
        latestUpdateTime: '2023-09-01 12:00:00',
      });
    }
  });
}

export async function dbGroup(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.DbInstanceItem>('/api/db/group', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

export async function selectDbGroupMock() {
  return new Promise<API.DbGroupOption[]>((resolve) => {
    resolve([
      {
        id: 1,
        groupName: 'MySQL测试主库',
      },
      {
        id: 2,
        groupName: 'MySQL测试所有',
      },
    ]);
  });
}

export async function dbTicket(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
    },
  options?: { [key: string]: any },
  ) {
  return request<API.DbTicketItem>('/api/ticket', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

export async function loadDbTicketMock(id: number) {
  return new Promise<API.DbTicketDetail>((resolve) => {
    if (id === 1) {
      resolve({
        id: 1,
        ticketTitle: "考核创建表结构",
        dbGroup: {
          id: 2,
          groupName: "MySQL测试所有"
        },
        dbTicketType: '结构变更',
        auditState: "审核通过",
        performState: "执行成功",
        createUser: {
          id: 1,
          chnName: "超级管理员"
        },
        createTime: "2023-09-01 12:00:00",
        textContent: "alter table",
        latestUpdateUser: {
          id: 1,
          chnName: "超级管理员"
        },
        latestUpdateTime: "2023-09-01 12:00:00",
      })
    } else {
      resolve({
        id: 2,
        ticketTitle: "考核数据初始化",
        dbGroup: {
          id: 2,
          groupName: "MySQL测试所有"
        },
        dbTicketType: '数据变更',
        beforeDbTicket: {
          id: 1,
          ticketTitle: "考核创建表结构",
          performState: "执行成功",
        },
        auditState: "审核中",
        performState: "待执行",
        createUser: {
          id: 1,
          chnName: "超级管理员"
        },
        createTime: "2023-09-01 12:00:00",
        textContent: "update sql",
        latestUpdateUser: {
          id: 1,
          chnName: "超级管理员"
        },
        latestUpdateTime: "2023-09-01 12:00:00",
      })
    }
  })
}

export async function loadDbTicketWithScript(id: number) {
  return new Promise<RequestData<API.DbTicketWithScriptDetail>>((resolve) => {
    resolve({
      data: {
        id: 1,
        ticketTitle: "考核创建表结构",
        dbGroup: {
          id: 2,
          groupName: "MySQL测试所有"
        },
        dbTicketType: '结构变更',
        beforeDbTicket: {
          id: 2,
          ticketTitle: "考核数据初始化",
          performState: "执行成功",
        },
        auditState: "审核通过",
        performState: "执行成功",
        createUser: {
          id: 1,
          chnName: "超级管理员"
        },
        createTime: "2023-09-01 12:00:00",
        textContent: "alter table",
        latestUpdateUser: {
          id: 1,
          chnName: "超级管理员"
        },
        latestUpdateTime: "2023-09-01 12:00:00",
        instanceScripts: [
          {
            dbInstance: {
              id: 1,
              dbInstanceName: "MySQL测试环境主库",
              dbProductCode: "MYSQL"
            },
            scripts: [
              {
                id: 1,
                performState: "SUCCESS",
                textContent: "alter table rpt_std_obj_dist add column rspnsbl_dept_id bigint comment '责任部门ID';",
              },
              {
                id: 2,
                exceptionInformationContent: "主键冲突",
                performState: "ERROR",
                textContent: "INSERT INTO dqm_rule_tmpl_clss (rule_tmpl_clss_id, rule_tmpl_clss_nm, `desc`, upp_rule_tmpl_clss_id) VALUES (1697535612331057123, '数据监控类', '数据监控类检核规则模版', 0);",
              }
            ]
          },
          {
            dbInstance: {
              id: 2,
              dbInstanceName: "MySQL测试环境租户库",
              dbProductCode: "MYSQL"
            },
            scripts: [
              {
                id: 1,
                performState: "SUCCESS",
                textContent: "alter table rpt_std_obj_dist add column rspnsbl_dept_id bigint comment '责任部门ID';",
              },
              {
                id: 2,
                performState: "SUCCESS",
                textContent: "INSERT INTO dqm_rule_tmpl_clss (rule_tmpl_clss_id, rule_tmpl_clss_nm, `desc`, upp_rule_tmpl_clss_id) VALUES (1697535612331057123, '数据监控类', '数据监控类检核规则模版', 0);",
              }
            ]
          }
        ]
      },
      success: true
    })
  })
}

export async function loadDbTicketWithScriptV2(id: number) {
  return new Promise<API.DbTicketWithScriptDetail>((resolve) => {
    resolve({
      id: 1,
      ticketTitle: "考核创建表结构",
      dbGroup: {
        id: 2,
        groupName: "MySQL测试所有"
      },
      dbTicketType: '结构变更',
      beforeDbTicket: {
        id: 2,
        ticketTitle: "考核数据初始化",
        performState: "执行成功",
      },
      auditState: "审核通过",
      performState: "执行成功",
      createUser: {
        id: 1,
        chnName: "超级管理员"
      },
      createTime: "2023-09-01 12:00:00",
      textContent: "alter table",
      latestUpdateUser: {
        id: 1,
        chnName: "超级管理员"
      },
      latestUpdateTime: "2023-09-01 12:00:00",
      instanceScripts: [
        {
          dbInstance: {
            id: 1,
            dbInstanceName: "MySQL测试环境主库",
            dbProductCode: "MYSQL"
          },
          scripts: [
            {
              id: 1,
              performState: "SUCCESS",
              textContent: "alter table rpt_std_obj_dist add column rspnsbl_dept_id bigint comment '责任部门ID';",
            },
            {
              id: 2,
              exceptionInformationContent: "主键冲突",
              performState: "ERROR",
              textContent: "INSERT INTO dqm_rule_tmpl_clss (rule_tmpl_clss_id, rule_tmpl_clss_nm, `desc`, upp_rule_tmpl_clss_id) VALUES (1697535612331057123, '数据监控类', '数据监控类检核规则模版', 0);",
            }
          ]
        },
        {
          dbInstance: {
            id: 2,
            dbInstanceName: "MySQL测试环境租户库",
            dbProductCode: "MYSQL"
          },
          scripts: [
            {
              id: 1,
              performState: "SUCCESS",
              textContent: "alter table rpt_std_obj_dist add column rspnsbl_dept_id bigint comment '责任部门ID';",
            },
            {
              id: 2,
              performState: "SUCCESS",
              textContent: "INSERT INTO dqm_rule_tmpl_clss (rule_tmpl_clss_id, rule_tmpl_clss_nm, `desc`, upp_rule_tmpl_clss_id) VALUES (1697535612331057123, '数据监控类', '数据监控类检核规则模版', 0);",
            }
          ]
        }
      ]}
    )
  })
}

export async function dbTicketScript(dbTicketId: number) {
  return new Promise<API.DbTicketScriptItem[]>((resolve) => {
    resolve([
      {
        id: 1,
        performState: "执行成功",
        textContent: "alter table",
      },
      {
        id: 2,
        exceptionInformationContent: "主键冲突",
        performState: "执行失败",
        textContent: "insert into",
      }
    ])
  })
}

export async function selectBeforeDbTicket() {
  return new Promise<API.DbTicketOption[]>((resolve) => {
    resolve([
      {
        id: 1,
        ticketTitle: "数据安全创建表",
        performState: "执行成功"
      },
      {
        id: 2,
        ticketTitle: "数据质量修改数据",
        performState: "执行成功"
      },
      {
        id: 3,
        ticketTitle: "平台修改表结构",
        performState: "执行成功"
      }
    ])
  })
}
