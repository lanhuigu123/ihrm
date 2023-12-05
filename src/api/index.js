import http from '../utils/httpRequest'

export const loginApi = (params) => http.post(http.addURL('/sys/login'), params)

export const departList = () => http.get(http.addURL('/company/department'))
