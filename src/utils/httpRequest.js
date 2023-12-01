/**
 * 第一步: 引入axios
 * 第二步: 创建axios实例
 *       1.baseURL,
 *       2.超时时间
 *       3.headers
 *       4.withCredentials
 * 第三步: 封装请求拦截
 *       1.loading加载
 *       2.封装token
 * 第四步: 封装响应拦截
 *       1.关闭loading加载
 *       2.捕捉错误，处理一些状态码
 *       3. 401 没权限,处理登录
 *       4.处理data
 * 第五步: 封装get请求和post请求
 * 第六步: 动态配置代理标识
 * 第七步: 配置NProgress进度条
 * 第八步: 导出axios实例
 */

let loadingInstance
import axios from 'axios'
import { MessageBox, Loading } from 'element-ui'
import DEFAULTSTATUS from './default'
import { getToken, removeToken } from './auth'
import router from '../router'

const instance = axios.create({
  // 根路径 基准地址
  baseURL: '',
  // 超时时间
  timeout: 1000 * 30,
  // header, Content-type
  Headers: {
    'Content-type': 'application/json; charset=utf-8'
  },
  // 表示跨域请求时是否需要使用凭证
  withCredentials: false
})

instance.interceptors.request.use(
  (config) => {
    /**
     * TODO: 封装token
     */
    config.headers.Authorization = 'Bearer ' + getToken()
    loadingInstance = Loading.service({ fullscreen: true, text: '加载中...' })

    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)
instance.interceptors.response.use(
  (response) => {
    loadingInstance.close()
    if (response.data && response.data.code === 10002) {
      removeToken()
      router.push({
        name: 'Login'
      })
    }
    return response.data
  },
  (error) => {
    let title = ''
    let message = ''
    loadingInstance.close()
    if (error && error.response) {
      /**后端返回的报错的信息 */
      message = error.response.data.message
      // 401, token失效
      switch (
        error.response.status // 跨域存在获取到的状态码的情况, status(随后端定义变化而变化,code)
      ) {
        case DEFAULTSTATUS.ERRORPRO:
          title = '错误请求'
          break // 停止循环
        case 401:
          title = '资源未授权'
          break
        case 403:
          title = '禁止访问'
          break
        case 404:
          title = '未找到所请求的资源'
          break
        case 405:
          title = '不允许使用该方法'
          break
        case 408:
          title = '请求超时'
          break
        case 500:
          title = '内部服务器错误'
          break
        case 501:
          title = '未实现'
          break
        case 502:
          title = '网关错误'
          break
        case 503:
          title = '服务不可用'
          break
        case 504:
          title = '网关超时'
          break
        case 505:
          title = 'HTTP版本不受支持'
          break
        default:
          title = error.response.status
      }
      return MessageBox.alert(message, title, {
        type: 'warning'
      })
    } else {
      // 跨域获取不到状态码或者其他状态进行的处理
      return MessageBox.alert('请联系系统管理员, 或稍后再试!', '未知错误', {
        type: 'error'
      })
    }
  }
)

/**
 * 封装动态代理标识
 * process.env.VUE_APP_IDENT
 */

instance.addURL = function (url) {
  console.log(url)
  console.log(process.env.VUE_APP_IDENT + url)
  return process.env.VUE_APP_IDENT + url
}

/***
 * TODO: 封装get和post请求
 */

export default instance
