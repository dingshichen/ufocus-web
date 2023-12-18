import {request} from "@@/exports";

export async function pageUsers(param: API.UserQuery & API.PageParams) {
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

export async function insertUser(param: API.UserInsert) {
  await request<{ data: number }>('/api/user/insert', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
     ...param
    }
  });
}

export async function loadUser(id: string) {
  const result = await request<{ data: API.UserDetail }>(`/api/user/${id}`);
  return result.data
}
