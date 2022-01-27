export default {
  namespaced: true,
  state: () => ({
    isShowLNB: false,
    isShowRNB: false
  }),
  mutations:{
    setState(state, payload){
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    }
  },
  actions:{
    onNav({commit},name){
      commit('setState', {
        [`isShow${name}`]: true
      })
    },
    offNav({commit},name){
      commit('setState', {
        [`isShow${name}`]: false
      })
    }
  }
}
