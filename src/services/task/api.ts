import {request} from "@@/exports";


export async function pageTask(param: API.TaskQuery & API.PageParams) {
  const result = await request<{ data: API.PageInfo<API.TaskItem> }>('/api/task/page', {
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

export async function loadTask(id: string) {
  const result = await request<{ data: API.TaskDetail }>(`/api/task/${id}`);
  return result.data
}
