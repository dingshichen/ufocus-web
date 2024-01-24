import {request} from "@@/exports";


export async function pageRequirement(param: API.RequirementQuery & API.PageParams) {
  const result = await request<{ data: API.PageInfo<API.RequirementItem> }>('/api/requirement/page', {
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

export async function loadRequirement(id: string) {
  const result = await request<{ data: API.RequirementDetail }>(`/api/requirement/${id}`);
  return result.data
}
