import {request} from "@@/exports";
import {toEnum} from "@/services/common/api";

export async function selectRoles(query: API.RoleSelectQuery = {}) {
  const result = await request<{ data: API.RoleOption[] }>('/api/role/select', {
    params: query
  })
  return toEnum(result.data)
}

export async function pageRoles(param: API.RoleQuery & API.PageParams) {
  const result = await request<{ data: API.PageInfo<API.RoleItem> }>('/api/role/page', {
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
  })
  return {
    data: result.data.records,
    success: true,
    total: result.data.total
  }
}

export async function loadRole(id: string) {
  const result = await request<{ data: API.RoleDetail }>(`/api/role/${id}`);
  return result.data
}

export async function insertRole(param: API.RoleInsert) {
  request('/api/role/insert', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: param
  })
}

export async function updateRole(param: API.RoleUpdate) {
  request(`/api/role/update`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: param
  })
}

export async function deleteRole(id: string) {
  request(`/api/role/${id}`, {
    method: 'DELETE',
  })
}
