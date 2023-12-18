import {request} from "@@/exports";

export async function pageUsers(param: API.UserQuery & API.PageParams) {
  console.log("请求参数：" + JSON.stringify(param))
  const result = await request<{ data: API.PageInfo<API.UserItem> }>('/api/user/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      page: param.current,
      size: param.pageSize,
      query: {
        ...param
      }
    }
  });
  return {
    data: result.data.records,
    success: true,
    total: result.data.total
  }
}


export async function loadUserMock(id: number) {
  return new Promise<API.UserDetail>((resolve) => {
    if (id === 1) {
      resolve({
        id: 1,
        chnName: "超级管理员",
        emailAddress: "10000@qq.com",
        roles: [
          {
            id: 1,
            chnName: "超级管理员",
          }
        ],
        isLockFlag: true,
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
    } else {
      resolve({
        id: 2,
        chnName: "丁时辰",
        mobilePhoneNumber: "17705505750",
        emailAddress: "foreverhuiqiao@126.com",
        roles: [
          {
            id: 2,
            chnName: "管理员",
          }
        ],
        isLockFlag: true,
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
    }
  })
}
