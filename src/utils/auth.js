/**
 * 把token存储到cookies中
 * 为了安全起见，减少接口被攻击
 * 第一步: 下载js-cookies依赖
 * 第二部: 封装存储token, 获取token, 移除token
 */

import Cookies from 'js-cookie'

const Type = 'token'

/**存储token*/
function setToken(value) {
  // expires  最长储存几天
  return Cookies.set(Type, value, { expires: 7 })
}

/**获取token*/
function getToken() {
  return Cookies.get(Type)
}

/**删除token*/
function removeToken() {
  return Cookies.remove(Type)
}

export { setToken, getToken, removeToken }
