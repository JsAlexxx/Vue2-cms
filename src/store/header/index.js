const headerStoreModule = {
  namespaced: true,
  state: () => ({
    isAsideCollapse: false,
  }),
  mutations: {
    toggleAsideCollapse(state) {
      state.isAsideCollapse = !state.isAsideCollapse
    }
  }
}

export default headerStoreModule