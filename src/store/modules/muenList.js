import * as API from '../../api/index'

const state = {
  newList: []
}
const mutations = {
  filterList(state, played) {
    console.log(played)
    const {
      singleList,
      alliMenlist
    } = played
		let data=singleList.data
		let menus=alliMenlist.data.roles.menus
    state.newList = data.filter((item) => {
      return menus.filter((element) => element === item.code).length > 0
    })
  }
}

const actions = {
  async getpermission({ commit }) {
    let alliMenlist = await API.getMuentListApi()
    let singleList = await API.getJurisdictionListApi()
    commit("filterList", { alliMenlist, singleList })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}