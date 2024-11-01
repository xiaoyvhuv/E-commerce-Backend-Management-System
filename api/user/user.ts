import request from '@/utils/request';
import type { loginForm, loginResponseData, userInfoReponseData } from './type';
//引入路由(常量路由)
// import { constantRoute, asnycRoute, anyRoute } from '@/router/routes';

enum API {
  // mock接口
  // LOGIN_URL = '/user/login',
  // USERINFO_URL = '/user/info',

  LOGIN_URL = '/admin/acl/index/login',
  USERINFO_URL = '/admin/acl/index/info',
  LOGOUT_URL = '/admin/acl/index/logout',
}

// 登录
export const loginRequest = (data: loginForm) => {
  return request.post<any, loginResponseData>(API.LOGIN_URL, data);
};
// 获取用户信息
export const getUserInfo = () => {
  return request.get<any, userInfoReponseData>(API.USERINFO_URL);
};
// 退出登录
export const logOut = () => {
  return request.post<any, any>(API.LOGOUT_URL);
};
