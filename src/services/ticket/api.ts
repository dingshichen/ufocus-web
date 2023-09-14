import {request} from "@@/exports";

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
  return request<API.TicketItem>('/api/ticket', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

export async function loadTicket(id: number) {
  return new Promise<API.TicketDetail>((resolve) => {
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
