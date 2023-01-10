import { Notify } from "vant";

// * 非空校验
export const isNotEmpty = (value) => {
  return value !== undefined && value !== null && value !== ''
}
// * 错误提示
export const errorTip = (message) => {
  Notify({ type: 'danger', message, });
}
// * 头像初始化
export const initAvatar = head => {
  // ? 是否包含http
  if (head.indexOf("http") === -1) {
    head = `https://admin.bdhuoke.com${head}`;
  }
  return head
}