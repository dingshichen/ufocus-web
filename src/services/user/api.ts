import {request} from "@@/exports";
import {toEnum} from "@/services/common/api";

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

export async function selectUser(query: API.UserSelectQuery) {
  const result = await request<{ data: API.UserOption[] }>('/api/user/select', {
    params: query
  })
  return toEnum(result.data)
}

export async function loadUser(id: string) {
  const result = await request<{ data: API.UserDetail }>(`/api/user/${id}`);
  return result.data
}

export async function insertUser(param: API.UserInsert) {
  request('/api/user/insert', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
     ...param
    }
  });
}

export async function updateUser(param: API.UserUpdate) {
  request('/api/user/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
    ...param
    }
  });
}

export async function lockUser(id: string) {
  request(`/api/user/lock/${id}`, {
    method: 'POST',
  });
}

export async function unlockUser(id: string) {
  request(`/api/user/unlock/${id}`, {
    method: 'POST',
  });
}
