import * as API from "../../api/index"
const state = {
  query: {
    page: 1,
    size: 10
  },
  cmpolyeeList: [],
  total: 0,
  roleList: [],
  reloDetali: [],
  detailId: "",
  ruleForm:{}
}
const mutations = {
  /**渲染 */
  render(state, value) {
    state.cmpolyeeList = value.rows
    state.total = value.total
  },
  /**分页 */
  handleCurrentChange(state, value) {
    state.query.page = value
  },
  /**获取角色列表 */
  renderRole(state, value) {
    state.roleList = value
  },
  /**获取id */
  checkReloL(state, value) {
    state.detailId = value
  },
  /**获取被选中的角色id */
  reloDetaliEvent(state, value) {
    state.reloDetali = value
  }
  /**获取查看的id */

}
const actions = {
  async EmployeeLists({ commit, state }) {
    let res = await API.getEmployeeListApi(state.query)
    commit("render", res.data)
  },
  async EmployeeRoleList({ commit, state }) {
    let res = await API.getEmployeeRoleListApi({ page: 1, pagesize: 10 })
    commit("renderRole", res.data.rows)
  },
  async checkReloList({ commit, state }) {
    let res = await (await API.getEmployeeRoleDetailApi({ id: state.detailId })).data.roleIds
    commit("reloDetaliEvent", res)
  },
  /**更新被选中的角色接口 */
  async addok({ commit, state }) {
    let res = await API.getEmoyeeRoleDetaAddApi({ id: state.detailId, roleIds: state.reloDetali })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
