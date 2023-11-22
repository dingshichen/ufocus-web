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

