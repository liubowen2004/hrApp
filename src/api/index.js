import http from "../api/http"
/**登录 */
export const getLoginApi = (data) => http.post(http.addURL("/sys/login"), data)
/** */
export const getMuentListApi = (data) => http.post(http.addURL("/sys/profile"), data)

/**获取部门数据*/

export const getStructureListApi = () => http.get(http.addURL("/company/department"))

/**新增部门*/

export const getStructureAddApi = (data) => http.post(http.addURL("/company/department"), data)
/**部门负责人列表 */
export const getStructureUserApi = () => http.get(http.addURL("/sys/user/simple"))
/**删除部门 */
export const getStructureDelApi = (data) => http.delete(http.addURL(`/company/department/${data.id}`))
/**部门数据回显 */
export const getStructureEchoApi = (data) => http.get(http.addURL(`/company/department/${data.id}`))

/**部门数据编辑 */

export const getStructureRevApi = (data) => http.put(http.addURL(`/company/department/${data.id}`), data)

//权限管理
/**获取所有权限 */
export const getJurisdictionListApi = () => http.get(http.addURL("/sys/permission"))
/**删除权限列表 */
export const getJurisdictionDelApi = (data) => http.delete(http.addURL(`/sys/permission/${data.id}`))
/**添加权限列表 */
export const getJurisdictionAddApi = (data) => http.post(http.addURL("/sys/permission"), data)
/**权限列表回显 */
export const getJurisdictionEchoApi = (data) => http.get(http.addURL(`/sys/permission/${data.id}`))
/**权限列表编辑 */
export const getJurisdictionRevApi = (data) => http.put(http.addURL(`/sys/permission/${data.id}`), data)

//员工列表
/**获取员工列表 */
export const getEmployeeListApi = (data) => http.get(http.addURL("/sys/user"), { params: data })
/**获取角色列表 */
export const getEmployeeRoleListApi = (data) => http.get(http.addURL("/sys/role"), { params: data })
/**获取角色详细 */
export const getEmployeeRoleDetailApi = (data) => http.get(http.addURL(`/sys/user/${data.id}`))

export const getEmoyeeRoleDetaAddApi = (data) => http.put(http.addURL("/sys/user/assignRoles"), data)

//公司管理
/**获取角色信息 */
export const getCompanyRoleListApi = (data) => http.get(http.addURL("/sys/role"), { params: data })

/**获取公司信息 */
export const getCompanyCprMsgApi = (data) => http.get(http.addURL(`/company/${data.id}`))

/**公司列表删除 */
export const getCompanyDelApi = (data) => http.delete(http.addURL(`/sys/role/${data.id}`))

/**公司列表添加 */
export const getCompanyAddApi = (data) => http.post(http.addURL("/sys/role"), data)

/**公司列表回填数据 */
export const getCompanyEchoApi = (data) => http.get(http.addURL(`/sys/role/${data.id}`))

/**公司列表编辑 */
export const getCompanyResetApi = (data) => http.put(http.addURL(`/sys/role/${data.id}`), data)

/**获取权限点 */
export const getCompanyAuthorityApi = () => http.get(http.addURL("/sys/permission"))

// 分配权限
export const rolesAssignApi = (data) => http.put(http.addURL("/sys/role/assignPrem"), data)
