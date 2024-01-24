import {request} from "@@/exports";


export async function pageProject(param: API.ProjectQuery & API.PageParams) {
  const result = await request<{ data: API.PageInfo<API.ProjectItem> }>('/api/project/page', {
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

export async function loadProject(id: string) {
  const result = await request<{ data: API.ProjectDetail }>(`/api/project/${id}`);
  return result.data
}
