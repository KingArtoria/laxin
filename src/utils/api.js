import request from './request';
// ? 登录/注册
export const login = (data) => {
  return request({
    url: '/login/SmsLogin',
    method: 'post',
    data,
  });
}
// ? 获取验证码
export const getVerifyCode = (data) => {
  return request({
    url: '/AlibabaSms/sms',
    method: 'post',
    data,
  });
}
// ? 游戏列表
export const getGameList = (data) => {
  return request({
    url: '/app/list',
    method: 'post',
    data,
  });
}
// ? 标签搜索
export const getSearchList = (data) => {
  return request({
    url: '/app/tag_search',
    method: 'post',
    data,
    headers: { token: localStorage.getItem('app_token') }
  });
}
// ? 搜索
export const getSearch = (data) => {
  return request({
    url: '/app/search',
    method: 'post',
    data,
    headers: { token: localStorage.getItem('app_token') }
  });
}
// ? 获取文章
export const getArticle = (data) => {
  return request({
    url: '/app/article',
    method: 'post',
    data,
    headers: { token: localStorage.getItem('app_token') }
  });
}