import http from '../utils/httpRequest'

/**登录*/
export const loginApi = (params) => http.post(http.addURL('/sys/login'), params)

/**获取部门列表*/
export const departList = () => http.get(http.addURL('/company/department'))

/**新增部门*/
export const addDepartApi = (params) =>
  http.post(http.addURL('/company/department'), params)

/**获取角色列表*/ //  /sys/user/simple
export const getRoleApi = () => http.get(http.addURL('/sys/user/simple'))

/**删除部门*/ // /company/department/{id}
export const delDepartApi = (params) =>
  http.delete(http.addURL(`/company/department/${params.id}`))

/**编辑部门*/ // /company/department/{id}
export const editDepartApi = (params) =>
  http.put(http.addURL(`/company/department/${params.id}`), params)

/**查询详情*/ // /company/department/{id}
export const detailDepartApi = (params) =>
  http.get(http.addURL(`/company/department/${params.id}`))
