import {request} from "@@/exports";


export async function pageDefect(param: API.DefectQuery & API.PageParams) {
  const result = await request<{ data: API.PageInfo<API.DefectItem> }>('/api/defect/page', {
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

export async function loadDefect(id: string) {
  const result = await request<{ data: API.DefectDetail }>(`/api/defect/${id}`);
  return result.data
}
