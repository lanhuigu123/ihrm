import http from '../utils/httpRequest'

/**登录*/
export const loginApi = (params) => http.post(http.addURL('/sys/login'), params)

/**获取部门列表*/
export const departList = () => http.get(http.addURL('/company/department'))

/**新增部门*/
export const addDepartApi = (params) =>
  http.post(http.addURL('/company/department'), params)

/**获取员工列表*/ //  /sys/user/simple
export const getUserApi = () => http.get(http.addURL('/sys/user/simple'))

/**删除部门*/ // /company/department/{id}
export const delDepartApi = (params) =>
  http.delete(http.addURL(`/company/department/${params.id}`), params)

/**编辑部门*/ // /company/department/{id}
export const editDepartApi = (params) =>
  http.put(http.addURL(`/company/department/${params.id}`), params)

/**查询详情*/ // /company/department/{id}
export const detailDepartApi = (params) =>
  http.get(http.addURL(`/company/department/${params.id}`), params)

/**获取所有角色列表*/ // /sys/role
export const getRoleApi = (params) => http.get(http.addURL('/sys/role'), params)

/**根据ID获取权限点*/ // /sys/permission/{id}
export const getAuthApi = (params) =>
  http.get(http.addURL(`/sys/permission/${params.id}`), params)

/**根据ID获取角色详情*/ // /sys/role/{id}
export const getRoleInfoApi = (params) =>
  http.get(http.addURL(`/sys/role/${params.id}`), params)

/**根据ID更新角色*/
export const editRoleApi = (params) =>
  http.put(http.addURL(`/sys/role/${params.id}`), params)

/**根据ID删除角色*/
export const delRoleApi = (params) =>
  http.delete(http.addURL(`/sys/role/${params.id}`), params)

/**获取员工列表*/
export const getEmployeeApi = (params) =>
  http.get(
    http.addURL(`/sys/user?page=${params.page}&size=${params.size}`, params)
  )

/**获取员工基本信息*/ //  /sys/user/{id}
export const getEmployeeInfoApi = (params) =>
  http.get(http.addURL(`/sys/user/${params.id}`), params)

/**保存员工基本信息*/
export const editEmployeeInfoApi = (params) =>
  http.put(http.addURL(`/sys/user/${params.id}`), params)

/**获取所有权限列表*/ // /sys/permission
export const getPermissionApi = () => http.get(http.addURL('/sys/permission'))

/**添加权限点*/
export const addPermissionApi = () => http.post(http.addURL('/sys/permission'))

/**根据id获取权限*/ // /sys/permission/{id}
export const getPermissionInfoApi = (params) =>
  http.get(http.addURL(`/sys/role/${params.id}`), params)

/**根据id获取角色权限*/
export const getUserPermissionInfoApi = (params) =>
  http.get(http.addURL(`/sys/permission/${params.id}`), params)

/**根据id更新权限点*/
export const editPermissionApi = (params) =>
  http.put(http.addURL(`/sys/permission/${params.id}`), params)

/**根据id删除权限点*/
export const delPermissionApi = (params) =>
  http.delete(http.addURL(`/sys/permission/${params.id}`), params)

/**获取用户基本资料*/ // /sys/profile
export const getUserInfoApi = () => http.post(http.addURL('/sys/profile'))
