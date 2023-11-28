import {request} from "@@/exports";

export async function role(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.UserItem>('/api/role', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

export async function loadRoleMock(id: number) {
  return new Promise<API.RoleDetail>((resolve) => {
    resolve({
      id: 1,
      chnName: "超级管理员",
      createUser: {
        id: 1,
        chnName: "超级管理员",
      },
      createTime: "2023-09-01 12:00:00",
      latestUpdateUser: {
        id: 1,
        chnName: "超级管理员"
      },
      latestUpdateTime: "2023-09-01 12:00:00",
    })
  })
}
