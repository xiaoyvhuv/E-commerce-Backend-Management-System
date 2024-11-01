export interface loginForm {
  username: string;
  password: string;
}

interface dataType {
  token?: string;
  message?: string;
}

//定义全部接口返回数据都拥有ts类型
export interface ResponseData {
  message: string;
  code: number;
  ok: boolean;
}

// 登录接口返回数据类型
export interface loginResponseData extends ResponseData {
  data: string;
}
// 返回用户信息数据类型
interface userInfo {
  userId: number;
  avatar: string;
  name: string;
  password: string;
  desc: string;
  token: string;
  roles: string[];
  buttons: string[];
  routes: string[];
}
// 获取用户信息接口返回数据类型
export interface userInfoReponseData extends ResponseData {
  data: userInfo;
}
