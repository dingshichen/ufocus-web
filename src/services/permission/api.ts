import {request} from "@@/exports";
import {toEnum} from "@/services/common/api";

export async function selectPermissions(query: API.PermissionSelectQuery = {}) {
  const result = await request<{ data: API.PermissionOption[] }>('/api/permission/select', {
    params: query
  })
  return toEnum(result.data, undefined, 'permissionName')
}
