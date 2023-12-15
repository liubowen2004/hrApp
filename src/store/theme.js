const state = {
  themeColor: "#008cff"
}
const mutations = {
  changeThemeColor(state, val) {
    state.themeColor = val
  }
}

export default { namespaced: true, state, mutations }
