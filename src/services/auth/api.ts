import {request} from "@umijs/max";

/** 登录 */
export async function login(body: API.LoginParams) {
  let username = encodeURIComponent(body.username ?? '');
  let password = encodeURIComponent(body.password ?? '');
  let rememberMe = body.autoLogin ? 'on' : undefined;
  let url = rememberMe ? `/api/auth/password?username=${username}&password=${password}&rememberMe=${rememberMe}` : `/api/auth/login?username=${username}&password=${password}`;
  return request<API.R<any>>(url, {
    method: 'POST'
  });
}

/** 获取当前的用户 */
export async function currentUser() {
  return request<{
    data: API.UserDetail;
  }>('/api/user/current', {
    method: 'GET'
  });
}
