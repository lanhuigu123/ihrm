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

import { Loading } from 'element-ui'

const instance = axios.create({
  // 根路径 基准地址
  baseURL: '',
  // 超时时间
  timeout: 1000 * 30,
  // header, Content-type
  Headers: {
    'Content-type': 'application/json; charset=utf-8'
  },
  // 跨域请求配置凭证
  withCredentials: false
})

instance.interceptors.request.use(
  (config) => {
    /**
     * TODO: 封装token
     */

    loadingInstance = Loading.service({ fullscreen: true, text: '加载中...' })

    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

instance.interceptors.response.use(
  (res) => {
    // Loading.service({ fullscreen: true, text: '加载中...' }).close()
    loadingInstance.close()

    return res.data
  },
  (err) => {
    // Loading.service({ fullscreen: true, text: '加载中...' }).close()
    return Promise.reject(err)
  }
)

/**
 * 封装动态代理标识
 * process.env.VUE_APP_IDENT
 */
