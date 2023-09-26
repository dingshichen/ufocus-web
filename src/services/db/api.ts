import { request } from '@@/exports';

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

export async function ticket(
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

export async function loadTicket(id: number) {
  return new Promise<API.DbTicketDetail>((resolve) => {
    if (id === 1) {
      resolve({
        id: 1,
        ticketTitle: "考核创建表结构",
        dbGroup: {
          id: 2,
          groupName: "MySQL测试所有"
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
      })
    } else {
      resolve({
        id: 1,
        ticketTitle: "考核数据初始化",
        dbGroup: {
          id: 2,
          groupName: "MySQL测试所有"
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
